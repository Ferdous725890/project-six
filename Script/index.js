const loadcategoriesData = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayShow(data.categories))
        .catch(error => console.log(error))
}
const loadAllPetsData = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayAllPetsData(data.pets))
        .catch(error => console.log(error))
}

// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }



const displayAllPetsData = (pets) => {
    const petsAllData = document.getElementById('All-Pets')
    pets.forEach(pet => {
        console.log(pet);
        const card = document.createElement('div')
        card.classList = 'card'
        card.innerHTML = `

                <div class="card glass">
                <figure>
                    <img class='w-full object-cover' src="${pet.image}" alt="Image of ${pet.breed}" />
                </figure>
                <div class="card-body">
                    <p class="card-title">
                       
                        ${pet.pet_name}
                    </p>
                    <p class='flex-row'>
                        <img src="/images/Frame (1).png" />
                        Breed: ${pet.breed && pet.breed.length > 0 ? pet.breed :' Not found !'}
                    </p>
                    <div class='flex'>
                    <p class='flex-row'>
                    <img src="/images/birth.png" alt="Birth icon" />
                    <span>Birth: ${pet.date_of_birth && pet.date_of_birth.length > 0 ? pet.date_of_birth : ' Not found !'}</span>
                    </p>
                    </div>

                    <p class='flex-row'>
                        <img src="/images/gender.png"/>
                        <span>Gender: ${pet.gender && pet.gender.length > 0 ? pet.gender:"Gender Not available !" }</span>
                    </p>
                    <p class='flex-row'>
                        <img src="/images/price.png" alt="Price icon" />
                        <span>Price: ${pet.price > 0 ? pet.price: "price Not found.."}</span>
                    </p>
                    <div class='flex-row justify-between'>
                        <button class="btn">
                            <img src="/images/like.png" alt="Like button" />
                        </button>
                        <button class="btn">Adopt</button>
                        <button class="btn">Details</button>
                    </div>
                </div>
            </div>
    
    `;
        petsAllData.appendChild(card)
    });
}




const displayShow = (categories) => {
    const categoryContainer = document.getElementById('categories'); 
    categories.forEach(item => {
        const buttonConteiner = document.createElement('div');
        buttonConteiner.innerHTML=`
        <button class='btn'>
        </button>
        `
        // button.classList.add('btn', 'button-border', 'px-8'); 
        // const img = document.createElement('img');
        // img.classList.add('w-[30px]')
        // img.src = item.category_icon; 
        // button.innerText = item.category;
        // button.appendChild(img);
        // categoryContainer.appendChild(button);
    });
};




loadcategoriesData()
loadAllPetsData()



























































// const displayShow = (categories) => {
//     const categoryContainer = document.getElementById('categories'); // 'categories' এলিমেন্টটি একবারই নিবেন
//     // console.log(categoryContainer);
//     categories.forEach(item => {
//         const button = document.createElement('button');
//         button.classList.add('btn', 'button-border', 'px-8'); // ক্লাস যুক্ত করতে classList.add ব্যবহার করুন
//         // ছবি তৈরি
//         const img = document.createElement('img');
//         img.classList.add('w-[30px]')
//         img.src = item.category_icon; // img এর src সেট করুন

//         // বাটনে টেক্সট যুক্ত করুন
//         button.innerText = item.category;
//         // বাটনে ছবি যুক্ত করুন
//         button.appendChild(img);

//         // বাটনটি কন্টেইনারে যুক্ত করুন
//         categoryContainer.appendChild(button);
//     });
// }