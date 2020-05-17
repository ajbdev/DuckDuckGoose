const searchForm = document.getElementById('search_form');

const div = document.createElement('div');

const input = document.getElementById('search_form_input');


const q = input.value;

function updateGoogleSearch() {
    const s = encodeURIComponent(input.value);

    document.getElementById('duckduckgoose').search = '?q=' + s;
}


div.innerHTML = `
<a href="https://www.google.com" id="duckduckgoose" style="
    position: absolute;
    right: -70px;
    top: 12px;
">
    Google
</a>
`;

searchForm.appendChild(div);

input.onkeyup = updateGoogleSearch;
input.onblur = updateGoogleSearch;

updateGoogleSearch();