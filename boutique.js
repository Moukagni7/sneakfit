// Fichier js/boutique.js
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const categorySelect = document.getElementById('category-select');
    const priceSelect = document.getElementById('price-select');
    const prevPageBtn = document.querySelector('.prev-page');
    const nextPageBtn = document.querySelector('.next-page');
    const currentPageSpan = document.querySelector('.current-page');
    const totalPagesSpan = document.querySelector('.total-pages');

    // Liste complète des produits
    const products = [
        {
            id: 1,
            name: 'Nike Air Jordan',
            category: 'sneakers',
            price: 25000,
            originalPrice: null,
            badge: 'Nouveau',
            image: 'images/nike1.jpg',
            whatsappNumber: '+241077564914',
            description: 'Sneakers Nike Air Jordan, un must-have pour les amateurs de style.'
        },
        {
            id: 2,
            name: 'Adidas Campus',
            category: 'sneakers',
            price: 20000,
            originalPrice: null,
            badge: 'Best-seller',
            image: 'images/adidas2.jpg',
            whatsappNumber: '+241077564914',
            description: 'Adidas Campus, confort et élégance pour votre quotidien.'
        },
        {
            id: 3,
            name: 'T-shirt Performance',
            category: 'vetements',
            price: 7000,
            originalPrice: null,
            badge: null,
            image: 'images/jordans3.jpg',
            whatsappNumber: '+241077564914',
            description: 'T-shirt technique pour vos séances d\'entraînement.'
        },
        {
            id: 4,
            name: 'Puma RS-X',
            category: 'sneakers',
            price: 15000,
            originalPrice: 30000,
            badge: '-50%',
            image: 'images/puma1.jpg',
            whatsappNumber: '+241077564914',
            description: 'Puma RS-X, le style à moitié prix, ne manquez pas cette offre!'
        },
        {
            id: 5,
            name: 'Nike Air Force 1',
            category: 'sneakers',
            price: 25000,
            originalPrice: null,
            badge: 'Populaire',
            image: 'images/jordan5.jpg',
            whatsappNumber: '+241077564914',
            description: 'Classique intemporel, le Nike Air Force 1.'
        },
        {
            id: 6,
            name: 'Short de sport',
            category: 'vetements',
            price: 5000,
            originalPrice: 8000,
            badge: '-37%',
            image: 'images/short2.jpg',
            whatsappNumber: '+241077564914',
            description: 'Short léger pour vos activités sportives.'
        },
        {
            id: 7,
            name: 'Casquette Snapback',
            category: 'accessories',
            price: 4500,
            originalPrice: null,
            badge: null,
            image: 'images/casquette 1.jpg',
            whatsappNumber: '+241077564914',
            description: 'Casquette ajustable pour un look streetwear.'
        },
        {
            id: 8,
            name: 'Chaussures de running',
            category: 'running',
            price: 22000,
            originalPrice: null,
            badge: 'Nouveau',
            image: 'images/sneakers2.jpg',
            whatsappNumber: '+241077564914',
            description: 'Confort optimal pour vos séances de running.'
        },
        {
            id: 9,
            name: 'T-short Puma',
            category: 'vetements',
            price: 12000,
            originalPrice: 15000,
            badge: '-20%',
            image: 'images/puma7.jpg',
            whatsappNumber: '+241077564914',
            description: 'Veste respirante pour vos entraînements.'
        },
        {
            id: 10,
            name: 'Gant',
            category: 'accessories',
            price: 4500,
            originalPrice: null,
            badge: null,
            image: 'images/Gant 3.jpg',
            whatsappNumber: '+241077564914',
            description: 'Casquette ajustable pour un look streetwear.'
        },
        {
            id: 11,
            name: 'Tee-shirt Jordan',
            category: 'vetements',
            price: 12000,
            originalPrice: 15000,
            badge: '-20%',
            image: 'images/jordans1.jpg',
            whatsappNumber: '+241077564914',
            description: 'Veste respirante pour vos entraînements.'
        },
        {
            id: 12,
            name: 'Sweat ',
            category: 'vetements',
            price: 20000,
            originalPrice: 40000,
            badge: '-50%',
            image: 'images/sweats2.jpg',
            whatsappNumber: '+241077564914',
            description: 'Sweat léger pour vos activités sportives.'
        },
        {
            id: 13,
            name: 'Casquette Snapback',
            category: 'accessories',
            price: 4500,
            originalPrice: null,
            badge: null,
            image: 'images/casquette 3.jpg',
            whatsappNumber: '+241077564914',
            description: 'Casquette ajustable pour un look streetwear.'
        },
        {
            id: 14,
            name: 'Chaussures de running',
            category: 'running',
            price: 20000,
            originalPrice: null,
            badge: 'Nouveau',
            image: 'images/running8.jpg',
            whatsappNumber: '+241077564914',
            description: 'Confort optimal pour vos séances de running.'
        },
        {
            id: 15,
            name: 'Maillot',
            category: 'vêtements',
            price: 12000,
            originalPrice: 15000,
            badge: '-20%',
            image: 'images/Maillot 2.jpg',
            whatsappNumber: '+241077564914',
            description: 'Maillot pour vos entraînements.'
        },
        {
            id: 16,
            name: 'Chaussette',
            category: 'accessories',
            price: 4500,
            originalPrice: null,
            badge: null,
            image: 'images/CHAUSSETTE 1.jpg',
            whatsappNumber: '+241077564914',
            description: 'Paire de chaussette.'
        },
        {
            id: 17,
            name: 'Sweat',
            category: 'vetements',
            price: 15000,
            originalPrice: 30000,
            badge: '-50%',
            image: 'images/sweats4.jpg',
            whatsappNumber: '+241077564914',
            description: 'Veste respirante pour vos entraînements.'
        },
        {
            id: 18,
            name: 'Sacs de sport',
            category: 'accessories',
            price: 15000,
            originalPrice: null,
            badge: null,
            image: 'images/sac 3.jpg',
            whatsappNumber: '+241077564914',
            description: 'Sac spacieux pour transporter votre équipement.'
        },
        {
            id: 19,
            name: 'Sacs de sport',
            category: 'accessories',
            price: 15000,
            originalPrice: null,
            badge: null,
            image: 'images/sac 2.jpg',
            whatsappNumber: '+241077564914',
            description: 'Sac spacieux pour transporter votre équipement.'
        },
        {
            id: 20,
            name: 'Nike Air Jordan',
            category: 'sneakers',
            price: 25000,
            originalPrice: null,
            badge: 'Nouveau',
            image: 'images/jordan4.jpg',
            whatsappNumber: '+241077564914',
            description: 'Sneakers Nike Air Jordan, un must-have pour les amateurs de style.'
        },
        {
            id: 21,
            name: 'Sacs de sport',
            category: 'accessories',
            price: 10000,
            originalPrice: null,
            badge: null,
            image: 'images/sac1.jpg',
            whatsappNumber: '+241077564914',
            description: 'Sac spacieux pour transporter votre équipement.'
        },
        {
            id: 22,
            name: 'Jogin',
            category: 'vetements',
            price: 15000,
            originalPrice: 30000,
            badge: '-50%',
            image: 'images/Jogin 1.jpg',
            whatsappNumber: '+241077564914',
            description: 'Jogin respirante pour vos entraînements.'
        },
        {
            id: 23,
            name: 'Chaussures de running',
            category: 'running',
            price: 15000,
            originalPrice: null,
            badge: 'Nouveau',
            image: 'images/running7.jpg',
            whatsappNumber: '+241077564914',
            description: 'Confort optimal pour vos séances de running.'
        },
        {
            id: 24,
            name: 'Nike Air Jordan 1',
            category: 'sneakers',
            price: 25000,
            originalPrice: null,
            badge: 'Populaire',
            image: 'images/jordan6.jpg',
            whatsappNumber: '+241077564914',
            description: 'Classique intemporel, la Nike Air Jordan 1.'
        },
        {
            id: 25,
            name: 'Jogin',
            category: 'vetements',
            price: 15000,
            originalPrice: 30000,
            badge: '-50%',
            image: 'images/Jogin 4.jpg',
            whatsappNumber: '+241077564914',
            description: 'Jogin respirante pour vos entraînements.'
        },
        {
            id: 26,
            name: 'Sacoche de sport',
            category: 'accessories',
            price: 8000,
            originalPrice: null,
            badge: null,
            image: 'images/sac 5.jpg',
            whatsappNumber: '+241077564914',
            description: 'Sacoche spacieuse pour transporter votre équipement.'
        },
        {
            id: 27,
            name: 'Nike Air Force 1',
            category: 'sneakers',
            price: 25000,
            originalPrice: null,
            badge: 'Populaire',
            image: 'images/pull2.jpg',
            whatsappNumber: '+241077564914',
            description: 'Classique intemporel, la Nike Air Force 1.'
        },
        {
            id: 28,
            name: 'Chaussures de running',
            category: 'running',
            price: 30000,
            originalPrice: null,
            badge: 'Nouveau',
            image: 'images/running6.jpg',
            whatsappNumber: '+241077564914',
            description: 'Confort optimal pour vos séances de running.'
        }
    ];

    let currentPage = 1;
    const productsPerPage = 8;
    let filteredProducts = [];

    function displayProducts(productsToDisplay) {
        productsContainer.innerHTML = '';
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const paginatedProducts = productsToDisplay.slice(startIndex, endIndex);

        if (paginatedProducts.length === 0) {
            productsContainer.innerHTML = '<p class="no-products">Aucun produit trouvé.</p>';
            return;
        }

        paginatedProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            let badgeHTML = product.badge ? `<div class="product-badge ${product.badge.includes('%') ? 'sale' : product.badge.toLowerCase().includes('best') ? 'bestseller' : ''}">${product.badge}</div>` : '';
            let originalPriceHTML = product.originalPrice ? 
                `<span class="original-price">${product.originalPrice.toLocaleString()} Fcfa</span>` : '';

            const whatsappMessage = encodeURIComponent(`Bonjour! Je suis intéressé par le produit ${product.name}. 
${product.description}
Plus de détails: https://sneakfit.com/produits/${product.id}`);

            productCard.innerHTML = `
                ${badgeHTML}
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-category">${getCategoryLabel(product.category)}</p>
                    <div class="product-price">
                        ${originalPriceHTML} ${product.price.toLocaleString()} Fcfa
                    </div>
                    <div class="product-actions">
                        <a href="produit.html?id=${product.id}" class="btn btn-outline">Détails</a>
                        <a href="https://wa.me/${product.whatsappNumber}?text=${whatsappMessage}" 
                           target="_blank" class="btn btn-whatsapp">
                            <i class="fab fa-whatsapp"></i> Intéressé
                        </a>
                    </div>
                </div>
            `;

            productsContainer.appendChild(productCard);
        });

        updatePagination(productsToDisplay);
    }

    function getCategoryLabel(category) {
        const categoryLabels = {
            'sneakers': 'Sneakers',
            'running': 'Running',
            'vetements': 'Vêtements',
            'accessories': 'Accessoires'
        };
        return categoryLabels[category] || category;
    }

    function filterProducts() {
        const selectedCategory = categorySelect.value;
        const selectedPriceSort = priceSelect.value;

        // Filtrage initial
        filteredProducts = selectedCategory === 'all' 
            ? [...products] 
            : products.filter(p => p.category === selectedCategory);

        // Tri
        if (selectedPriceSort === 'low-to-high') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (selectedPriceSort === 'high-to-low') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        currentPage = 1;
        displayProducts(filteredProducts);
    }

    function updatePagination(products) {
        const totalPages = Math.ceil(products.length / productsPerPage);
        
        currentPageSpan.textContent = currentPage;
        totalPagesSpan.textContent = totalPages;

        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    }

    // Événements
    categorySelect.addEventListener('change', filterProducts);
    priceSelect.addEventListener('change', filterProducts);

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts(filteredProducts);
        }
    });

    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayProducts(filteredProducts);
        }
    });

    // Initialisation
    filterProducts();

    // Gestion des paramètres d'URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        categorySelect.value = categoryParam;
        filterProducts();
    }
});



// Gestion du formulaire de connexion
document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.querySelector('.user-icon');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const registerFormContainer = document.getElementById('registerFormContainer');
    const closeLogin = document.querySelector('.close-login');
    const closeRegister = document.querySelector('.close-register');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');

    // Afficher le formulaire de connexion
    userIcon.addEventListener('click', function(e) {
        e.preventDefault();
        loginFormContainer.style.display = 'flex';
    });

    // Fermer le formulaire de connexion
    closeLogin.addEventListener('click', function() {
        loginFormContainer.style.display = 'none';
    });

    // Fermer le formulaire d'inscription
    closeRegister.addEventListener('click', function() {
        registerFormContainer.style.display = 'none';
    });

    // Afficher le formulaire d'inscription
    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginFormContainer.style.display = 'none';
        registerFormContainer.style.display = 'flex';
    });

    // Afficher le formulaire de connexion depuis l'inscription
    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'flex';
    });

    // Fermer quand on clique en dehors du formulaire
    window.addEventListener('click', function(e) {
        if (e.target === loginFormContainer) {
            loginFormContainer.style.display = 'none';
        }
        if (e.target === registerFormContainer) {
            registerFormContainer.style.display = 'none';
        }
    });

    // Gestion de la soumission du formulaire de connexion
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Ici vous ajouteriez votre logique de connexion
        alert('Connexion en cours...');
        loginFormContainer.style.display = 'none';
    });

    // Gestion de la soumission du formulaire d'inscription
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Ici vous ajouteriez votre logique d'inscription
        alert('Inscription en cours...');
        registerFormContainer.style.display = 'none';
    });
});