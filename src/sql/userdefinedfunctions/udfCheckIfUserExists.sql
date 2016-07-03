IF object_ID(N'udfCheckIfUserExists', N'IF') IS NOT NULL
	DROP FUNCTION udfCheckIfUserExists
GO
CREATE FUNCTION dbo.udfCheckIfUserExists(
	@userName nvarchar(255),
	@email nvarchar(255))
RETURNS TABLE
AS
RETURN
(
                    
    SELECT ID  
    FROM BugFarmUsers
    Where (UNAME = @userName) OR (EMAIL_ADDRESS = @email)
                    
)

--usage
--select * from
--dbo.udfCheckIfUserExists('mescheidegger', 'mescheidegger@gmail.com')
