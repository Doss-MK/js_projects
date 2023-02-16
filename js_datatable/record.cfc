<cfcomponent>
    <cffunction name="getEmployeeRecords" access="remote" returnformat="JSON">
        <cfset LOCAL.employeeData = queryExecute(
            "SELECT * FROM employee ORDER BY id ASC OFFSET #ARGUMENTS.start# ROWS FETCH NEXT #ARGUMENTS.end# ROWS ONLY",
            {},
            { datasource = "falcon_dev" })
        />
        <cfset LOCAL.response = [] />

        <cfloop query="#LOCAL.employeeData#">
            <cfset LOCAL.returnObject = {} />
            <cfset LOCAL.returnObject.id = LOCAL.employeeData.ID />
            <cfset LOCAL.returnObject.name = LOCAL.employeeData.NAME />
            <cfset LOCAL.returnObject.designation = LOCAL.employeeData.DESIGNATION />
            <cfset LOCAL.returnObject.year_of_exp = LOCAL.employeeData.YEAR_OF_EXP />
            <cfset arrayAppend(LOCAL.response, LOCAL.returnObject) />
        </cfloop>
        
        <cfset LOCAL.result = {
            records: LOCAL.response,
            filterRecords: 5,
            totalRecords: 10
        }/>

        <cfreturn LOCAL.result />
    </cffunction>
</cfcomponent>