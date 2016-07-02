IF object_ID(N'udfGetIssueDetails', N'IF') IS NOT NULL
	DROP FUNCTION udfGetIssueDetails
GO
CREATE FUNCTION dbo.udfGetIssueDetails(
	@issueKey nvarchar(255))
RETURNS TABLE
AS
RETURN
(
                    
    SELECT ID, 
		IssueType, 
		IKey, 
		Summary, 
		(
		select (FIRST_NAME + ' ' + LAST_NAME) 
		from BugFarmUsers
		WHERE ID = bfi.ASSIGNEE
		) As ASSIGNEE, 
		(
		select (FIRST_NAME + ' ' + LAST_NAME) 
		from BugFarmUsers
		WHERE ID = bfi.REPORTER
		) As REPORTER, 
		[Priority], 
		[Status], 
		Resolution, 
		CREATED, 
		UPDATED, 
		[Description],
		(			
		SELECT ISNULL(STUFF((SELECT N', ' + VersionName
		FROM BugFarmVersions
		WHERE (ID in (SELECT VERSIONID FROM BugFarmIssueVersions WHERE ISSUEID = bfi.ID AND (LinkType = 'AffectVersion')))
		FOR XML PATH(''),TYPE).value('text()[1]','nvarchar(max)'),1,2,N''),'')
		) as AffectVersions  
    FROM BugFarmIssues As bfi
    Where Ikey = @issueKey
                    
)

--usage
--select * from
--dbo.udfGetIssueDetails('ACUI-1')