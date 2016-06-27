CREATE FUNCTION dbo.udfCountIssues(
	@searchterm nvarchar(255))
RETURNS int
AS
BEGIN          
    declare @RET int;
	SELECT @RET = count(ID)
    FROM BugFarmIssues
    Where (Summary Like ('%' + @searchterm + '%')) OR (Description Like ('%' + @searchterm + '%'))
	IF (@ret IS NULL)   
        SET @ret = 0;
    RETURN @ret;
	
END 
--usage
--dbo.udfCountIssues @searchterm = '' 