let students = [{name: "Alessandro", surname: "Ambra", age: 25, city: "Rome", hobby: "sports & coding", favoriteFood: "carbonara", favoriteVideoGame:"Final Fantasy X", favoriteFilm:"",favoriteBook:"Bersker", petName:"Guntar"}, 
                {name : "Jeferson", surname : "Revello", age : 32, city : "Andora", hobby : "making music", favoriteFood : "kebab", favoriteVideoGame : "Final Fantasy X", favoriteFilm : "The Matrix", favoriteBook : "The 4-Hour Body by Tim Ferriss", petName :""}, 
                {name:"Massimo", surname:"Natella", age:30, city:"Naples", hobby:"Cinema,reading,writing", favoriteFood:"Pizza", favoriteVideoGame: "GTA", favoriteFilm:"Once upomn time in America", favoriteBook:"Siddharta",petName:"Luna"} ,
                {name: "Francesco", surname: "Dragonetti", age: 25, city: "Turin", hobby: "football", favoriteFood: "pizza", favoriteVideoGame: "Assassin's creed", favoriteFilm: "Pulp Fiction", favoriteBook: "Musica per organi caldi", petName:"Nami"} 
];

  function videoGames(arr){
    for(let i = 0; i < arr.length; i++) { 
        if(arr[i].favoriteVideoGame == "LOL" || arr[i].favoriteVideoGame == "League of legend"){
         console.log(arr[i].name)
        
        }
        else console.log("nobody took LoL")
       
    }

     
} 
   videoGames(students);

   
 



