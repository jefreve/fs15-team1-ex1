let students = [{name: "Alessandro", surname: "Ambra", age: 25, city: "Rome", hobby: "sports & coding", favoriteFood: "carbonara", favoriteVideoGame:"Final Fantasy X", favoriteFilm:"",favoriteBook:"Bersker", petName:"Guntar"}, 
                {name : "Jeferson", surname : "Revello", age : 32, city : "Andora", hobby : "making music", favoriteFood : "kebab", favoriteVideoGame : "Final Fantasy X", favoriteFilm : "The Matrix", favoriteBook : "The 4-Hour Body by Tim Ferriss", petName: ""}, 
                {name:"Massimo", surname:"Natella", age:30, city:"Naples", hobby:"Cinema,reading,writing", favoriteFood:"Pizza", favoriteVideoGame: "GTA", favoriteFilm:"Once upomn time in America", favoriteBook:"Siddharta",petName:"Luna"} ,
                {name: "Francesco", surname: "Dragonetti", age: 25, city: "Turin", hobby: "football", favoriteFood: "pizza", favoriteVideoGame: "Assassin's Creed", favoriteFilm: "Pulp Fiction", favoriteBook: "Musica per organi caldi", petName:"Nami"} 
];

// petValidation function

function petValidation(arr) {
    for (let i = 0; i < arr.length; i++) {
        let animal= arr[i].petName;
    
        if(animal !== ""){console.log(animal);}
       
            
        } 
}
   
 
petValidation(students);


// ageValidation function 

function ageValidation(a,b){
    if(a.age < b.age){
        return -1
    } else if (a.age > b.age){
        return 1
    }
    return 0
}
for(let i=0; i< students.length; i++){
    students.sort(ageValidation)
    console.log(students[i].age , students[i].name)
}

// middleAge function

function sumOfAges(arr){
    let sum = 0;
    for(let i=0; i< arr.length; i++){
        sum += arr[i].age
    }
    console.log("The middle group age is", sum/arr.length)

}
sumOfAges(students)


function sameName(arr){
    let nome1 = arr[0]
    for(let i=0; i <arr.length; i++){
        if(arr[i].name == nome1){
            return arr[i].name
        } else return "Nobody has the same name"
    }
}
console.log(sameName(students))

function videoGames(arr){
    videoGameLol = 0;

    for(let i = 0; i < arr.length; i++) { 
        if(arr[i].favoriteVideoGame == "LOL"){
         console.log(arr[i].name + " chose LOL");
         videoGameLol=1;
        }
       
       
       if(videoGameLol == 0) {console.log("nobody took LoL"); }



    }


} 
   videoGames(students)

