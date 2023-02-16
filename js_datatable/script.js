window.onload = () => {
    getEmployeeRecords({start: 0, end: 2, pageLengh: 1, search: '', selector: 'employeeRecord'});
}

const lengthOption = document.querySelector('.length-select');
const searchInput = document.querySelector('.search');

const getEmployeeRecords = async ( options ) => {
    const dataTableContent = document.querySelector('.data-table-content');
    const dataTable = document.querySelector(`#${options.selector}`);
    const totalRecordHeader = dataTableContent.querySelector('.total-record-title');
    const paginationSection = dataTableContent.querySelector('.pagination');
    const lengthOption = dataTableContent.querySelector('.length-select');

    const formData = new FormData();
    formData.append('start', options.start);
    formData.append('end', options.end);
    formData.append('search', options.search);

    const response = await fetch('record.cfc?method=getEmployeeRecords', {
        method : "POST",
        body : formData
    });
    
    const result = await response.json();

    if(result) {
        totalRecordHeader.innerText = `Showing ${options.start + 1} to ${options.end} of ${result.TOTALRECORDS} entries`;
        const paginationCount = result.TOTALRECORDS < options.end ? 1 : Math.ceil(result.TOTALRECORDS / options.end);
        let valOfLength = 0;
        lengthOption.innerHTML = "";
        paginationSection.innerHTML = "";
        dataTable.querySelector('tbody').innerHTML = "";

        for (let i of Array(paginationCount).keys()) {
            valOfLength += Number(options.end);
            lengthOption.innerHTML += `<option value="${valOfLength}" ${valOfLength == options.end ? 'selected' : ''}>${valOfLength}</option>`;
            paginationSection.innerHTML += `<li class="page-item" onclick="handlePaginationLength(this);"><a class="page-link">${i + 1}</a></li>`;
        }

        for(const row of result.RECORDS) {
            const rowContent = `
                <tr>
                    <td>${row.ID}</td>
                    <td>${row.NAME}</td>
                    <td>${row.DESIGNATION}</td>
                    <td>${row.YEAR_OF_EXP}</td>
                </tr>
            `;
            dataTable.querySelector('tbody').innerHTML += rowContent;
        }
    }
    
};

const handleLengthOptionChange = (event) => {
    const length = event.target.options[event.target.selectedIndex].value;
    getEmployeeRecords({start: 0, end: length, pageLengh: 1, search: '', selector: 'employeeRecord'});
}

const handlePaginationLength = (event) => {
    console.log({event})
    const pageLength = event.querySelector('.page-link').text;
    getEmployeeRecords({start: Number(pageLength) + 1, end: 2, pageLengh: Number(pageLength), search: '', selector: 'employeeRecord'});
}

const handleRecordSearch = (event) => {
    console.log({event})
}

lengthOption.addEventListener('change', handleLengthOptionChange);
searchInput.addEventListener('input', handleRecordSearch);