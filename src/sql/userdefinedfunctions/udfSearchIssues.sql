IF object_ID(N'udfSearchIssues', N'IF') IS NOT NULL
	DROP FUNCTION udfSearchIssues
GO
CREATE FUNCTION dbo.udfSearchIssues(
	@searchterm nvarchar(255),
	@offset int,
	@fetch int)
RETURNS TABLE
AS
RETURN
(
                    
        SELECT ID, 
			IssueType, 
			IKey, 
			Summary, 
			ASSIGNEE, 
			REPORTER, 
			Priority, 
			Status, 
			Resolution, 
			CREATED, 
			UPDATED,
			(			
			SELECT ISNULL(STUFF((SELECT N', ' + VersionName
			FROM BugFarmVersions
            WHERE (ID in (SELECT VERSIONID FROM BugFarmIssueVersions WHERE ISSUEID = bfi.ID AND (LinkType = 'AffectVersion')))
			FOR XML PATH(''),TYPE).value('text()[1]','nvarchar(max)'),1,2,N''),'')
			) as AffectVersions 
        FROM BugFarmIssues as bfi
        Where (Summary Like ('%' + @searchterm + '%')) OR (Description Like ('%' + @searchterm + '%'))
        ORDER BY ID
        OFFSET @offset ROWS FETCH NEXT @fetch ROWS ONLY
                    
)

--usage
--select * from
--dbo.udfSearchIssues('', 5, 50)