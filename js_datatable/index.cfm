<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="script.js" defer></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>
        <cfoutput>
            <div class="container mt-5 data-table-content">
                <div class="row mb-3">
                    <div class="col-6">
                        <select class="form-select w-25 length-select">
                        </select>
                    </div>
                    <div class="col-6">
                        <input type="search" class="form-control w-50 float-end search" placeholder="Search"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <table class="table table-bordered table-condensed table-striped" id="employeeRecord">
                            <thead>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Year of Exp</th>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <p class="total-record-title">Test</p>
                    </div>
                    <div class="col-6">
                        <nav aria-label="Page navigation example" class="float-end">
                            <ul class="pagination">
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </cfoutput>
    </body>
</html>