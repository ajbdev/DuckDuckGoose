const searchForm = document.getElementById('search_form');
const div = document.createElement('div');
const input = document.getElementById('search_form_input');

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

if (input && input.value) {
    searchForm.appendChild(div);

    input.onkeyup = updateGoogleSearch;
    input.onblur = updateGoogleSearch;

    updateGoogleSearch();
}