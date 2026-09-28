fetch("menu.json")
    .then(response => response.json())
    .then(menu => {
    let themenu= document.getElementById("continer");
      for (let i = 0; i < menu.length; i++) 
        {
            themenu.innerHTML +=`<p>
                    Name: ${menu[i].MealName}
                    - Price: ${menu[i].Price}
                    - avalible: ${menu[i].avalible}
                </p>`;
        }

    });