document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 10;
    let currentPage = 1;
    let data = [];
    let filteredData = [];
    let sortOrder = {
        nodes: 'asc',
        inserts: 'asc'
    };

    fetch('data.json')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            filteredData = data;
            displayTable(filteredData, currentPage, rowsPerPage);
            setupPagination(filteredData, rowsPerPage);
        })
        .catch(error => console.error('Error fetching data:', error));

    document.getElementById('search-input').addEventListener('input', filterData);
    document.getElementById('sort-nodes').addEventListener('click', () => sortData('NODES'));
    document.getElementById('sort-inserts').addEventListener('click', () => sortData('INSERTS'));

    function filterData() {
        const query = document.getElementById('search-input').value.toLowerCase();
        filteredData = data.filter(item => item.EPITOPE.toLowerCase().includes(query));
        currentPage = 1;
        displayTable(filteredData, currentPage, rowsPerPage);
        setupPagination(filteredData, rowsPerPage);
    }

    function sortData(column) {
        const order = sortOrder[column.toLowerCase()];
        filteredData.sort((a, b) => {
            if (order === 'asc') {
                return a[column] - b[column];
            } else {
                return b[column] - a[column];
            }
        });
        sortOrder[column.toLowerCase()] = order === 'asc' ? 'desc' : 'asc';
        updateSortIcons();
        displayTable(filteredData, currentPage, rowsPerPage);
    }

    function updateSortIcons() {
        const nodesSortIcon = document.getElementById('nodes-sort-icon');
        const insertsSortIcon = document.getElementById('inserts-sort-icon');

        nodesSortIcon.textContent = sortOrder.nodes === 'asc' ? '▲' : '▼';
        insertsSortIcon.textContent = sortOrder.inserts === 'asc' ? '▲' : '▼';
    }

    function displayTable(data, page, rowsPerPage) {
        const tableBody = document.getElementById('data-table-body');
        tableBody.innerHTML = '';
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedItems = data.slice(start, end);

        paginatedItems.forEach(item => {
            const row = document.createElement('tr');
            Object.entries(item).forEach(([key, value]) => {
                const cell = document.createElement('td');
                if (key === 'SEGMENT MAP') {
                    const segments = value.split(', ');
                    if (segments.length > 0 && segments[0] !== "") {
                        const iconContainer = document.createElement('div');
                        iconContainer.classList.add('icon-container');

                        const icon = document.createElement('i');
                        icon.classList.add('bi', 'bi-arrow-up-right-circle-fill');
                        icon.style.cursor = 'pointer';
                        icon.addEventListener('click', () => {
                            const modalBody = document.getElementById('segmentModalBody');
                            modalBody.innerHTML = '';
                            segments.forEach(segment => {
                                const modalLink = document.createElement('a');
                                modalLink.href = `https://projetos.lbi.iq.usp.br/trypanosoma/epitopes-db/igv-webapp/?locus=${segment}`;
                                modalLink.textContent = segment;
                                modalLink.target = '_blank';
                                modalBody.appendChild(modalLink);
                                modalBody.appendChild(document.createElement('br'));
                            });
                            $('#segmentModal').modal('show');
                        });
                        iconContainer.appendChild(icon);
                        cell.appendChild(iconContainer);
                    }
                } else if (key === 'MSA') {
                    const msas = value.split(', ');
                    if (msas.length > 0 && msas[0] !== "") {
                        const iconContainer = document.createElement('div');
                        iconContainer.classList.add('icon-container');

                        const icon = document.createElement('i');
                        icon.classList.add('bi', 'bi-arrow-up-right-circle-fill');
                        icon.style.cursor = 'pointer';
                        icon.addEventListener('click', () => {
                            const modalBody = document.getElementById('msaModalBody');
                            modalBody.innerHTML = '';
                            msas.forEach(msa => {
                                const modalLink = document.createElement('a');
                                modalLink.href = `https://projetos.lbi.iq.usp.br/trypanosoma/epitopes-db/mview/${msa}.html`;
                                modalLink.textContent = msa;
                                modalLink.target = '_blank';
                                modalBody.appendChild(modalLink);
                                modalBody.appendChild(document.createElement('br'));
                            });
                            $('#msaModal').modal('show');
                        });
                        iconContainer.appendChild(icon);
                        cell.appendChild(iconContainer);
                    }
                } else if (key === 'FEATURES') {
                    const features = value.split('; ');
                    if (features.length > 0 && features[0] !== "") {
                        const iconContainer = document.createElement('div');
                        iconContainer.classList.add('icon-container');

                        const icon = document.createElement('i');
                        icon.classList.add('bi', 'bi-arrow-up-right-circle-fill');
                        icon.style.cursor = 'pointer';
                        icon.addEventListener('click', () => {
                            const modalBody = document.getElementById('featuresModalBody');
                            modalBody.innerHTML = '';
                            features.forEach(feature => {
                                const featureText = document.createElement('p');
                                featureText.textContent = feature;
                                modalBody.appendChild(featureText);
                            });
                            $('#featuresModal').modal('show');
                        });
                        iconContainer.appendChild(icon);
                        cell.appendChild(iconContainer);
                    }
                } else {
                    cell.textContent = value;
                }
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    }

    function setupPagination(data, rowsPerPage) {
        const paginationControls = document.getElementById('pagination-controls');
        paginationControls.innerHTML = '';
        const pageCount = Math.ceil(data.length / rowsPerPage);

        for (let i = 1; i <= pageCount; i++) {
            const li = document.createElement('li');
            li.classList.add('page-item');
            const a = document.createElement('a');
            a.classList.add('page-link');
            a.href = '#';
            a.textContent = i;
            a.addEventListener('click', function(event) {
                event.preventDefault();
                currentPage = i;
                displayTable(data, currentPage, rowsPerPage);
                updatePaginationControls(pageCount, currentPage);
            });
            li.appendChild(a);
            paginationControls.appendChild(li);
        }

        updatePaginationControls(pageCount, currentPage);
    }

    function updatePaginationControls(pageCount, currentPage) {
        const paginationControls = document.getElementById('pagination-controls');
        const pageItems = paginationControls.getElementsByClassName('page-item');
        for (let i = 0; i < pageItems.length; i++) {
            pageItems[i].classList.remove('active');
        }
        if (pageItems[currentPage - 1]) {
            pageItems[currentPage - 1].classList.add('active');
        }
    }
});