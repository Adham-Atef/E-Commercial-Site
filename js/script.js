const initialProducts = [
    { id: 1, title: "Wireless Bluetooth Headphones", price: 49.99, category: "electronics", imageUrl: "https://m.media-amazon.com/images/I/41JACWT-wWL._UF894,1000_QL80_.jpg", description: "Experience superior sound quality and ultimate freedom with these Wireless Bluetooth Headphones. Designed for comfort and long-lasting battery life, they're perfect for your daily commute, workouts, or just relaxing at home. The intuitive controls allow you to manage music and calls effortlessly, while the ergonomic design ensures a secure fit. With a sleek, minimalist aesthetic, these headphones are as stylish as they are functional, providing an immersive audio experience without the hassle of wires. They offer rich bass and crisp highs, making every genre of music sound fantastic. A must-have accessory for any audio enthusiast.", seller: "TechHaven", company: "AcoustiCo", isActive: true, reviews: [] },
    { id: 2, title: "Portable Bluetooth Speaker", price: 29.99, category: "electronics", imageUrl: "https://m.media-amazon.com/images/I/71DRh3h61OL._UF894,1000_QL80_.jpg", description: "Bring your music anywhere with this compact and powerful Portable Bluetooth Speaker. Its rugged, splash-proof design makes it ideal for outdoor adventures, pool parties, or a day at the beach. Despite its small size, it delivers surprisingly loud and clear audio with deep bass. The long-lasting battery ensures the party doesn't stop, and the easy-to-use Bluetooth connectivity pairs seamlessly with any device. This speaker is the perfect companion for music on the go, offering great sound in a durable, take-anywhere package.", seller: "SoundSphere", company: "AudioDynamics", isActive: true, reviews: [] },
    { id: 3, title: "Smart LED Light Bulb", price: 14.99, category: "electronics", imageUrl: "https://images.ctfassets.net/a3peezndovsu/variant-15022247379033/adafcde7f95ae0bc9f6745783f30d6cb/variant-15022247379033.jpg", description: "Revolutionize your home lighting with the Smart LED Light Bulb. Control your lights from your smartphone, set schedules, and even change colors to create the perfect ambiance for any occasion. This energy-efficient bulb integrates easily with smart home systems, allowing for voice control and personalized lighting scenes. Its long lifespan means you'll save money on energy bills and replacement costs. Whether you want to create a cozy, warm glow or a vibrant party atmosphere, this smart bulb provides limitless customization to suit your mood and lifestyle.", seller: "LightUp Living", company: "LumiNova", isActive: true, reviews: [] },
    { id: 4, title: "Analog Leather Strap Watch", price: 89.99, category: "watches", imageUrl: "https://m.media-amazon.com/images/I/41NNvX7Xt7L.jpg", description: "A timeless classic, the Analog Leather Strap Watch is a perfect blend of elegance and functionality. Featuring a genuine leather strap and a clean, easy-to-read dial, this watch is suitable for both casual and formal wear. The durable construction ensures it will be a reliable accessory for years to come, and the comfortable fit makes it ideal for all-day wear. With its minimalist design and precise timekeeping, this watch adds a touch of sophistication to any outfit. A reliable timepiece that never goes out of style.", seller: "Timeless Trends", company: "Elegant Timepieces", isActive: true, reviews: [] },
    { id: 5, title: "Digital Sports Watch", price: 59.99, category: "watches", imageUrl: "https://skmei.eg/cdn/shop/files/SKMEI_1283_Analog_Digital_Sport_watch_black.jpg?v=1750424504", description: "Stay on top of your game with the Digital Sports Watch. Built for the active individual, this watch features a durable, water-resistant design and a range of useful functions including a stopwatch, alarm, and calendar. The large digital display is easy to read, even during intense workouts. Its comfortable and secure strap ensures it stays in place no matter the activity. Whether you're running, swimming, or hitting the gym, this watch is a dependable partner for tracking your performance. A rugged and functional accessory for any sports enthusiast.", seller: "ActiveGear", company: "Sportiva", isActive: true, reviews: [] },
    { id: 6, title: "Luxury Stainless Steel Watch", price: 199.99, category: "watches", imageUrl: "https://m.media-amazon.com/images/I/51o-993gdyL._SY900_.jpg", description: "Make a statement with the Luxury Stainless Steel Watch. Crafted with high-quality stainless steel, this watch exudes sophistication and class. The intricate details and polished finish make it an exceptional accessory for special occasions or daily wear. Its robust construction ensures longevity and a luxurious feel on your wrist. The reliable movement provides accurate timekeeping, and the sleek design pairs effortlessly with professional attire or formal wear. This watch is an investment in style and quality, showcasing a refined taste for premium accessories. A true symbol of elegance.", seller: "Prestige Time", company: "Elite Watches", isActive: true, reviews: [] },
    { id: 7, title: "Gaming Laptop 16GB RAM", price: 1299.99, category: "laptops", imageUrl: "https://i5.walmartimages.com/seo/ASUS-ROG-Strix-G17-2023-17-3-QHD-240Hz-Gaming-Laptop-AMD-Ryzen-9-7845HX-NVIDIA-GeForce-RTX-4060-16GB-DDR5-RAM-1TB-SSD-Windows-11-G713PV-WS94_8a5257b2-883c-477e-8142-35b46352f92a.0b55fb46033257cd57f4aada7acef161.jpeg", description: "Dominate the gaming world with this powerful Gaming Laptop. Equipped with 16GB of RAM and a high-performance processor, it's built to handle the most demanding games and multitasking with ease. The vibrant display and dedicated graphics card provide stunning visuals and a smooth frame rate for an immersive gaming experience. The efficient cooling system ensures peak performance during long gaming sessions. With its aggressive design and powerful components, this laptop is a game-changer for serious gamers, offering the performance needed to compete at the highest level. A true powerhouse.", seller: "GameCore", company: "PowerByte", isActive: true, reviews: [] },
    { id: 8, title: "Ultrabook 13-inch", price: 999.99, category: "laptops", imageUrl: "https://m.media-amazon.com/images/I/51GS1Q6svwL._UF894,1000_QL80_.jpg", description: "Combining style and portability, the Ultrabook 13-inch is perfect for professionals and students on the go. Its lightweight, slim design makes it easy to carry, while the powerful performance handles everyday tasks with speed and efficiency. The crisp, high-resolution display is great for productivity and media consumption. The long-lasting battery life ensures you can work or study all day without needing to find a power outlet. With its premium build and reliable performance, this ultrabook is a smart choice for anyone seeking a balance of power and portability.", seller: "MobileTech", company: "Zenith Laptops", isActive: true, reviews: [] },
    { id: 9, title: "Budget Student Laptop", price: 499.99, category: "laptops", imageUrl: "https://www.jbhifi.com.au/cdn/shop/files/778382-Product-0-I-638605014606340596.jpg?v=1724904734", description: "Get everything you need for school or work with the Budget Student Laptop. This affordable and reliable device is perfect for taking notes, writing papers, and browsing the web. While it may not be a powerhouse, it provides solid performance for essential tasks and offers great value for its price. Its compact size and decent battery life make it a great companion for class and library sessions. A practical and cost-effective solution for students who need a reliable machine without breaking the bank. Simple, functional, and budget-friendly.", seller: "Campus Gear", company: "ValueComp", isActive: true, reviews: [] },
    { id: 10, title: "Flagship Smartphone 128GB", price: 899.99, category: "phones", imageUrl: "https://m.media-amazon.com/images/I/715rSRKUlLL._UF894,1000_QL80_.jpg", description: "Experience the pinnacle of mobile technology with the Flagship Smartphone. Featuring a stunning display, a powerful processor, and a professional-grade camera system, this phone is designed for those who demand the best. The sleek design and premium materials give it a luxurious feel, while the generous 128GB of storage ensures you have plenty of space for photos, videos, and apps. With its advanced features and exceptional performance, this smartphone redefines what a mobile device can do. The ultimate tool for productivity, creativity, and communication.", seller: "Nexus Phones", company: "Innovate Mobiles", isActive: true, reviews: [] },
    { id: 11, title: "Mid-range Android Phone", price: 399.99, category: "phones", imageUrl: "https://static0.anpoimages.com/wordpress/wp-content/uploads/2024/08/google-pixel-9-pro.png", description: "Get a premium experience without the premium price tag with the Mid-range Android Phone. This device offers a fantastic balance of features, performance, and affordability. It comes with a vibrant display, a capable camera, and a long-lasting battery that will get you through the day. The user-friendly Android interface and expandable storage make it a versatile choice for a wide range of users. It's a reliable everyday smartphone that handles calls, social media, and media consumption with ease. A great value for the features it offers.", seller: "Value Wireless", company: "Connect Global", isActive: true, reviews: [] },
    { id: 12, title: "Compact 5G Smartphone", price: 599.99, category: "phones", imageUrl: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-52874233/samsung_samsung_galaxy_z_flip4_5g_smartphone_-8gb-512gb-_full11_fd3q8vd9.jpg", description: "Enjoy blazing-fast connectivity and a comfortable one-handed experience with the Compact 5G Smartphone. Despite its small form factor, this phone packs a punch with 5G capabilities, a high-quality camera, and a responsive screen. It's the perfect choice for users who prefer a device that's easy to hold and fits neatly in a pocket. The powerful processor ensures smooth performance for all your apps and games. This smartphone proves that you don't have to sacrifice performance for portability. A small phone with big features.", seller: "PocketTech", company: "AeroMobile", isActive: true, reviews: [] },
    { id: 13, title: "Classic Aviator Sunglasses", price: 79.99, category: "glasses", imageUrl: "https://m.media-amazon.com/images/I/31+HdT5m3RL._SY1000_.jpg", description: "Achieve an iconic look with the Classic Aviator Sunglasses. A timeless design that never goes out of style, these sunglasses feature durable metal frames and lenses that provide excellent UV protection. Whether you're driving, lounging by the pool, or just out and about, they offer both style and function. The comfortable fit and lightweight construction make them suitable for extended wear. The perfect accessory to complete any outfit, these aviators are a staple in any wardrobe. A classic design for a stylish look.", seller: "Shade Masters", company: "Iconic Eyewear", isActive: true, reviews: [] },
    { id: 14, title: "Blue Light Blocking Glasses", price: 39.99, category: "glasses", imageUrl: "https://cdn.4imprint.ca/prod/700/561114.jpg", description: "Protect your eyes from digital strain with the Blue Light Blocking Glasses. Designed to filter out harmful blue light emitted from screens, they help reduce eye fatigue and improve sleep patterns. These glasses are a must-have for anyone who spends long hours in front of a computer, smartphone, or tablet. The stylish frames make them a functional and fashionable accessory for work and study. Invest in your eye health and comfort with these essential blue light glasses. A simple solution for a modern problem.", seller: "Clarity Vision", company: "ScreenShield", isActive: true, reviews: [] },
    { id: 15, title: "Polarized Sports Sunglasses", price: 59.99, category: "glasses", imageUrl: "https://m.media-amazon.com/images/I/31ppHRB8A4L._SY1000_.jpg", description: "Enhance your outdoor performance with the Polarized Sports Sunglasses. The polarized lenses reduce glare from reflective surfaces like water and roads, providing clear and crisp vision. Their lightweight, durable frame and secure fit make them ideal for running, cycling, fishing, and other outdoor activities. They offer superior protection against UV rays and are designed to withstand the rigors of an active lifestyle. Stay focused on your sport while protecting your eyes with these high-performance sunglasses. The perfect companion for any outdoor adventure.", seller: "Outdoor Optics", company: "ActiveLens", isActive: true, reviews: [] },
    { id: 16, title: "All-in-One Home Printer", price: 119.99, category: "home & office", imageUrl: "https://m.media-amazon.com/images/I/31XomqN18-L._SR290,290_.jpg", description: "Simplify your home office tasks with this All-in-One Home Printer. It prints, scans, and copies with ease and can be connected wirelessly for convenient printing from your devices. The compact design saves space, and the high-yield ink cartridges save you money in the long run. A versatile and essential tool for any home or small office.", seller: "PrintPerfect", company: "InkStream", isActive: true, reviews: [] },
    { id: 17, title: "Professional Chef's Knife", price: 49.99, category: "kitchen", imageUrl: "https://m.media-amazon.com/images/I/61685lGK+yL._UF894,1000_QL80_.jpg", description: "Elevate your cooking with this Professional Chef's Knife. The razor-sharp stainless steel blade and ergonomic handle provide precise control and effortless cutting. It's perfectly balanced for comfortable use, whether you're slicing, dicing, or mincing. A must-have tool for any aspiring home chef. Prepare your meals with precision and ease.", seller: "Culinary Crafts", company: "BladeWorks", isActive: true, reviews: [] },
    { id: 18, title: "Beginner's Acoustic Guitar", price: 129.99, category: "music", imageUrl: "https://m.media-amazon.com/images/I/81zr1rX1zJL._UF894,1000_QL80_.jpg", description: "Start your musical journey with this Beginner's Acoustic Guitar. It features a comfortable body shape and smooth neck, making it easy to learn and play. The guitar produces a warm, rich tone, perfect for practicing chords and strumming. It's a durable and affordable instrument that provides great value for new musicians. Your first step towards creating beautiful music.", seller: "MusicMakers", company: "Acoustic Harmon", isActive: true, reviews: [] },
    { id: 19, title: "Ergonomic Office Chair", price: 249.99, category: "home & office", imageUrl: "https://m.media-amazon.com/images/I/61mLjE4u2+L._UF894,1000_QL80_.jpg", description: "Improve your posture and productivity with this Ergonomic Office Chair. Featuring adjustable lumbar support, armrests, and a tilt mechanism, this chair is designed for maximum comfort during long work hours. The breathable mesh back keeps you cool, while the padded seat provides ample support. Its sleek design fits perfectly in any modern office or home setup. A key investment for your health and comfort, making a long day at the desk much more manageable.", seller: "ComfortZone", company: "ErgoFurnish", isActive: true, reviews: [] },
    { id: 20, title: "Smart Coffee Maker", price: 129.99, category: "kitchen", imageUrl: "https://m.media-amazon.com/images/I/61+PGoBUwqL._UF894,1000_QL80_.jpg", description: "Wake up to the perfect cup of coffee with the Smart Coffee Maker. Use your smartphone to schedule brewing, adjust strength, and even start a pot from your bed. Its sleek design and advanced features make it a must-have for any coffee lover. The built-in grinder ensures fresh coffee every time, and the insulated carafe keeps it hot for hours. Start your day with convenience and a perfectly brewed cup.", seller: "MorningBrew", company: "AromaTech", isActive: true, reviews: [] },
    { id: 21, title: "Noise-Cancelling Over-Ear Headphones", price: 179.99, category: "electronics", imageUrl: "https://m.media-amazon.com/images/I/51f7KKP25PL._UF894,1000_QL80_.jpg", description: "Immerse yourself in your music with these Noise-Cancelling Over-Ear Headphones. They effectively block out ambient noise, allowing you to focus on your audio. The plush earcups and adjustable headband provide exceptional comfort for extended listening sessions. With a long-lasting battery and high-fidelity sound, they are perfect for travel, study, or simply escaping the world. Experience pure sound without distractions.", seller: "SoundCore Audio", company: "PureSound", isActive: true, reviews: [] },
    { id: 22, title: "4K Ultra HD Smart TV", price: 699.99, category: "electronics", imageUrl: "https://m.media-amazon.com/images/I/41UH0q2vKXL._SR290,290_.jpg", description: "Transform your entertainment experience with this 4K Ultra HD Smart TV. Its stunning resolution and vibrant colors bring movies and shows to life. Built-in smart features allow you to stream your favorite content from popular apps with ease. The slim, modern design fits seamlessly into any living room, and the multiple ports ensure you can connect all your devices. A cinematic experience in the comfort of your home.", seller: "VisualTech", company: "ClearView Displays", isActive: true, reviews: [] },
    { id: 23, title: "Men's Classic Trench Coat", price: 149.99, category: "clothing", imageUrl: "https://m.media-amazon.com/images/I/21kizM4sI6L._SY350_.jpg", description: "Stay stylish and dry with this Men's Classic Trench Coat. Made from a durable, water-resistant fabric, it’s perfect for transitional weather. The timeless design features a double-breasted front and a belted waist for a refined silhouette. This coat is a versatile staple that can be dressed up or down, making it an essential piece for any wardrobe. An elegant solution for unpredictable weather.", seller: "Gentleman's Closet", company: "UrbanThreads", isActive: true, reviews: [] },
    { id: 24, title: "Women's High-Waisted Jeans", price: 69.99, category: "clothing", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71B5PBnc36L._AC_UL375_SR375,375_.jpg", description: "Flatter your figure with these stylish Women's High-Waisted Jeans. Crafted from a comfortable stretch denim, they offer a perfect fit that moves with you. The high-waisted design elongates the legs and provides a chic, modern look. Pair them with a simple tee or a dressy top for a versatile outfit. A comfortable and fashionable addition to your everyday style.", seller: "Trendy Trousers", company: "Denim Co.", isActive: true, reviews: [] },
    { id: 25, title: "Leather Biker Jacket", price: 189.99, category: "clothing", imageUrl: "https://m.media-amazon.com/images/I/819wlJUGjiL._UF894,1000_QL80_.jpg", description: "Add an edgy touch to your wardrobe with this Leather Biker Jacket. Made from genuine leather, it features a classic asymmetrical zip and silver hardware. The jacket is durable and designed to age beautifully, making it a long-lasting piece. Perfect for a night out or adding a cool vibe to a casual look. A timeless piece of outerwear that never goes out of style.", seller: "Rebel Threads", company: "LeatherCraft", isActive: true, reviews: [] },
    { id: 26, title: "Yoga Mat", price: 24.99, category: "fitness", imageUrl: "https://m.media-amazon.com/images/I/41IZlWU+uwL._SR290,290_.jpg", description: "Enhance your yoga practice with this non-slip Yoga Mat. Made from eco-friendly TPE material, it provides excellent grip and cushioning for all your poses. The mat is lightweight and easy to roll up, making it ideal for taking to the studio or practicing at home. It’s also easy to clean and maintains its shape over time. A supportive and comfortable foundation for your fitness journey.", seller: "Mindful Movement", company: "Zenith Fitness", isActive: true, reviews: [] },
    { id: 27, title: "Digital Jump Rope", price: 19.99, category: "fitness", imageUrl: "https://m.media-amazon.com/images/I/41sQONixYWL._SR290,290_.jpg", description: "Take your cardio to the next level with this Digital Jump Rope. The built-in digital counter tracks your jumps, calories burned, and time, helping you monitor your workout progress. The adjustable rope length and comfortable handles make it suitable for users of all heights and skill levels. A simple yet effective tool for a full-body workout.", seller: "FitFusion", company: "ActiveLife Gear", isActive: true, reviews: [] },
    { id: 28, title: "Stainless Steel Water Bottle", price: 19.99, category: "kitchen", imageUrl: "https://m.media-amazon.com/images/I/619uHsbsXQL._UF894,1000_QL80_.jpg", description: "Stay hydrated on the go with this sleek Stainless Steel Water Bottle. Its double-walled insulation keeps drinks cold for up to 24 hours and hot for 12 hours. The leak-proof lid and durable construction make it perfect for the gym, office, or outdoor adventures. A stylish and eco-friendly alternative to single-use plastic bottles.", seller: "Hydrate Now", company: "EcoFlask", isActive: true, reviews: [] },
    { id: 29, title: "Wireless Gaming Mouse", price: 69.99, category: "electronics", imageUrl: "https://m.media-amazon.com/images/I/61bz3jIh5yL.jpg", description: "Gain a competitive edge with this Wireless Gaming Mouse. It features a high-precision sensor, customizable buttons, and a comfortable ergonomic design. The lag-free wireless connection ensures seamless performance during intense gaming sessions. The adjustable DPI settings allow you to fine-tune sensitivity for different games. A powerful tool for serious gamers.", seller: "ProGaming Gear", company: "AeroTech", isActive: true, reviews: [] },
    { id: 30, title: "Compact Digital Camera", price: 299.99, category: "electronics", imageUrl: "https://m.media-amazon.com/images/I/515IAxWgz1L.jpg", description: "Capture life's moments with the Compact Digital Camera. Despite its small size, it delivers high-quality photos and videos. It features a zoom lens, image stabilization, and various shooting modes to help you get the perfect shot. Its user-friendly interface makes it a great choice for casual photographers. A portable solution for capturing memories in stunning detail.", seller: "PhotoFocus", company: "PixelPoint", isActive: true, reviews: [] }
];

const initialUsers = [
    { firstName: "John", lastName: "Doe", email: "john@gmail.com", password: "john@gmail.com", isAdmin: true, cart: [], orders: [], wishlist: [] },
    { firstName: "Emily", lastName: "Clark", email: "emily.clark@example.com", password: "Qwerty456$", isAdmin: false, cart: [], orders: [], wishlist: [] },
    { firstName: "Michael", lastName: "Smith", email: "michael.smith@example.com", password: "Secure789#", isAdmin: false, cart: [], orders: [], wishlist: [] },
    { firstName: "Sophia", lastName: "Johnson", email: "sophia.johnson@example.com", password: "AbcD1234@", isAdmin: false, cart: [], orders: [], wishlist: [] },
    { firstName: "David", lastName: "Brown", email: "david.brown@example.com", password: "PassWord!2025", isAdmin: false, cart: [], orders: [], wishlist: [] }
];


const alertsCheckout = document.querySelector("#alerts")

const addAlert = (isShipping, isDanger, text = "Add a Payment First !") => {

    const alertDiv = document.createElement("div");
    alertDiv.className = "alert alertDiv productAlert alert-success"
    alertDiv.setAttribute("role", "alert")
    if (isDanger)
        alertDiv.classList.add("alert-danger")

    if (isShipping) {
        alertDiv.innerHTML = `
               Add a Shipping Address First !
       `
    } else {
        alertDiv.innerHTML = text;
    }
    setTimeout(
        () => {
            alertDiv.classList.add("productAlertAfter");
        }
        , 50
    );
    setTimeout(
        () => {
            alertDiv.classList.remove("productAlertAfter");

        }
        , 3000
    )

    alertsCheckout.appendChild(alertDiv)
    if (alertDiv !== alertsCheckout.firstElementChild)
        alertsCheckout.firstElementChild.remove()
}

if (!JSON.parse(localStorage.getItem("products")) || JSON.parse(localStorage.getItem("products")).length === 0) {
    localStorage.setItem("products", JSON.stringify(initialProducts))
    localStorage.setItem("lastProductID", initialProducts.length) // so we can add items after last id wykon unique
}

let products = JSON.parse(localStorage.getItem("products"));

if (!JSON.parse(localStorage.getItem("users")) || JSON.parse(localStorage.getItem("users")).length === 0) {
    localStorage.setItem("users", JSON.stringify(initialUsers))
}
let users = JSON.parse(localStorage.getItem("users"));

let currentUser;
if (JSON.parse(localStorage.getItem("currentUser"))) {
    currentUser = JSON.parse(localStorage.getItem("currentUser"))
}

if (localStorage.getItem("orderToBePlace") === "true") {
    console.log("s")
    localStorage.removeItem("orderToBePlace")
    addAlert(false, false, `Order  ${Number(localStorage.getItem("lastOrderID")) - 1}# has been placed successfully`)
}

if (!localStorage.getItem("lastOrderID")) {

    localStorage.setItem("lastOrderID", "1")
}

if (!localStorage.getItem("shippingFees")) {

    localStorage.setItem("shippingFees", 10)
}

const btn = document.querySelector("#searchBtn")
const productsContainer = document.querySelector("#products-container");
const searchBar = document.querySelector("#searchBar")
const searchSelect = document.querySelector("#searchSelect")
const productAlert = document.querySelector("#productAlert")
const alerts = document.querySelector("#alerts")


const emitProductPage = id => {
    localStorage.setItem("viewProductID", id)
    window.location.href = "product.html"
}

const addProductAlert = product => {

    const alertDiv = document.createElement("div");
    alertDiv.className = "alert alertDiv productAlert alert-success"
    alertDiv.setAttribute("role", "alert")

    alertDiv.innerHTML = `
                ${product.title} has been added to cart  
       `
    setTimeout(
        () => {
            alertDiv.classList.add("productAlertAfter");
        }
        , 50
    );
    setTimeout(
        () => {
            alertDiv.classList.remove("productAlertAfter");

        }
        , 3000
    )

    alerts.appendChild(alertDiv)
    if (alertDiv !== alerts.firstElementChild)
        alerts.firstElementChild.remove()
}

const updateProductStorage = () => {

    localStorage.setItem("products", JSON.stringify(products))

}


const updateUsers = () => {
    let userIndex = users.findIndex(
        user => {
            return currentUser.email === user.email;
        }
    )
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        localStorage.setItem("users", JSON.stringify(users))
    }
}


const getCartItemID = productID => {
    return currentUser.cart.find(
        item => {
            return productID === item.id
        }
    )
}

const getCartWishlistArrayID = productID => {
    return currentUser.wishlist.findIndex(
        id => {
            return productID === id
        }
    )
}



const addToWishlist = product => {
    const productID = product.id;
    if (currentUser) {

        const productCartArrayID = getCartWishlistArrayID(productID)

        if (productCartArrayID != -1) {
            currentUser.wishlist.splice(productCartArrayID, 1)
        } else {
            currentUser.wishlist.push(
                productID
            )
        }

        updateUsers(); // to save cart in local storage msh el current session !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    } else {
        window.location.href = "login.html"
    }
}


const addToCart = product => {
    const productID = product.id;
    if (currentUser) {

        const productCartID = getCartItemID(productID)

        if (productCartID) {
            productCartID.quantity++;
        } else {
            currentUser.cart.push(
                {
                    id: productID,
                    quantity: 1,
                }
            )
        }
        if (product) { // 3lshan a7yanan fe error by7sl lma dtos besor3a lan mfesh 7aga fel  cart
            addProductAlert(product);
        }
        updateUsers(); // to save cart in local storage msh el current session !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        calculateItemsQuantity()

    } else {
        window.location.href = "login.html"
    }

}

const drawProduct = (productObj) => {
    let isWish = -1;
    if (currentUser) {
        isWish = currentUser.wishlist.findIndex(id => id === productObj.id);
    }

    const colDiv = document.createElement("div");
    colDiv.className = "col-lg-4 col-md-6 col-12 px-4 mb-5 text-center";

    colDiv.innerHTML = `
        <div class="d-flex flex-column product-content border bg-white">
            <div style="cursor:pointer;" onclick="emitProductPage(${productObj.id})" class="product-image w-100">
                <img src="${productObj.imageUrl}" alt="${productObj.title}">
            </div>
            <div class="d-flex flex-column product-info w-100">
                <h4 class="px-3">${productObj.title}</h4>

                <div class="mt-auto">
                <p >Price: <span>${productObj.price} $</span></p>
                <p >Category: <span style="text-transform: capitalize;">${productObj.category}</span></p>
                </div>
                <div class=" mb-4 d-flex justify-content-center align-items-center product-btns" style="gap: 10px;">
                
                    ${isWish === -1
            ? `<i class="fa-regular fa-heart wishlist text-danger" style="font-size: 2rem; cursor:pointer;"></i>`
            : `<i class="fa-solid fa-heart wishlist text-danger" style="font-size: 2rem;cursor:pointer;"></i>`} 
                    <button class="addProductToCartBtn btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    `;



    const addProductToCartBtn = colDiv.querySelector(".addProductToCartBtn");
    addProductToCartBtn.addEventListener("click", () => {

        users = JSON.parse(localStorage.getItem("users"))
        currentUser = JSON.parse(localStorage.getItem("currentUser"))

        addToCart(productObj);
    });

    const wishlistIcon = colDiv.querySelector(".wishlist");
    wishlistIcon.addEventListener("click", () => {
        addToWishlist(productObj);
        updateProducts()
    });

    if (productsContainer) {
        productsContainer.appendChild(colDiv);
    }
}


function updateProducts() {
    if (productsContainer) {
        const searchValue = searchSelect.value;
        productsContainer.innerHTML = ""
        products.forEach(element => {
            if (element.isActive) {
                if (searchValue == 0) {
                    if (element.title.trim().toLowerCase().includes(searchBar.value.trim().toLowerCase())) {
                        drawProduct(element)
                    }
                } else {
                    if (element.category.trim().toLowerCase().includes(searchBar.value.trim().toLowerCase())) {

                        drawProduct(element)
                    }
                }
            }
        });
    }
}



if (searchBar) {
    searchBar.addEventListener("input", updateProducts);
}

if (searchSelect) {
    searchSelect.addEventListener("change", updateProducts);
}

updateProducts()