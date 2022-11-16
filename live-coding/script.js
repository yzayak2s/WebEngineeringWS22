const app_state_data = {
    items: [
        {
            id: 1,
            title: 'Robbe',
            img: '',
            rating: {
                akless: 4,
                john: 5,
                jane: 5
            },
        },
        {
            id: 2,
            title: 'Igel',
            img: '',
            rating: {
                akless: 3,
                john: 4,
                jane: 3
            }
        }
    ]
};

function refresh() {
    const $items = document.querySelector('#items');
    app_state_data.items.forEach(item => {
        let ratings = Object.values(item.ratings);
        const average = ratings.length ? ratings.reduce((current_sum, summand) => current_sum + summand) / ratings.length : '';
        const $items = document.createElement('div');
        $items.innerHTML = `
            <div class="card">
                <h2>${item.title}</h2>
                <img src="${item.img}">
                <div id="rating">
                    ${Array(5).fill(null).map((_,i) =>
                    `<i class="bi bi-star${average >= i + 1 ? '-fill' : (average >= i + 0.5 ? '-half' : '')}"></i>`).join('')}
                    (${ratings.length})
                </div>
            </div>
        `;
        $items.appendChild($item);
    });
    const $plus = document.createElement('div');
    $plus.classList.add('col');
    $plus.innerHTML = `
    <div class="card h-100 d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="modal">
        <i class="bi bi-plus-lg"></i>
    </div>
`;
    $items.appendChild($plus);
}



document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault(); // GANZ WICHTIG
    const file = document.querySelector('#img').files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        app_state_data.items.push({
            id: app_state_data.items.length + 1,
            title: document.querySelector('#title').value,
            img: reader.result,
            ratings: {}
        });
        render();
    };
    reader.onerror = error => console.log('Error ', error);

    console.log(document.querySelector('#img').files);
    // new bootstrap.Modal(document.querySelector('#modal')).hide();
});

refresh();