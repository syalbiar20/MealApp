const meal = fetch('https://themealdb.com/api/json/v1/1/categories.php')

meal.then((data) => {
  return data.json()
}).then((getData) => {
  console.log(getData)

  let html = '';

  getData.categories.forEach(e => {
    html += `
      <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4 d-flex justify-content-center">
      <img src="${e.strCategoryThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${e.strCategory}</h5>
        <p class="card-text">${e.strCategoryDescription}</p>
      </div>
    </div>
  </div>
</div>
    `;

    document.getElementById('append').innerHTML = html;
  });
})