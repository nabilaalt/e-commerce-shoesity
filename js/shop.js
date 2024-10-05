document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
  
    // Fetch data dari Fake Store API
    fetch('https://fakestoreapi.com/products/category/men\'s clothing')
      .then(response => response.json())
      .then(menProducts => {
        fetch('https://fakestoreapi.com/products/category/women\'s clothing')
          .then(response => response.json())
          .then(womenProducts => {
            const allProducts = [...menProducts, ...womenProducts]; // Gabungkan produk pria dan wanita
            displayProducts(allProducts);
          })
          .catch(error => console.error("Error fetching women's clothing:", error));
      })
      .catch(error => console.error("Error fetching men's clothing:", error));
  
    function displayProducts(products) {
      products.forEach(product => {
        const productHTML = `
          <div class="col-4">
            <img src="${product.image}" alt="${product.title}">
            <h4>${product.title}</h4>
            <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i> 
            </div>
            <p>$${product.price}</p>
          </div>
        `;
        productList.innerHTML += productHTML;
      });
    }
  });

  const sections = document.querySelectorAll('div[id]');
    const menuLinks = document.querySelectorAll('#MenuItems li a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
  
 