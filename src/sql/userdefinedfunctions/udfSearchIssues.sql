CREATE FUNCTION dbo.udfSearchIssues(
	@searchterm nvarchar(255),
	@offset int,
	@fetch int)
RETURNS TABLE
AS
RETURN
(
                    
        SELECT ID, IssueType, IKey, Summary, ASSIGNEE, REPORTER, Priority, Status, Resolution, CREATED, UPDATED 
        FROM BugFarmIssues
        Where (Summary Like ('%' + @searchterm + '%')) OR (Description Like ('%' + @searchterm + '%'))
        ORDER BY ID
        OFFSET @offset ROWS FETCH NEXT @fetch ROWS ONLY
                    
)

--usage
--select * from
--dbo.udfSearchIssues('', 5, 50)