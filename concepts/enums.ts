export enum STATES {
    CHIMALTENANGO = "Chimaltenango",
    ZACAPA = "Zacapa",
    PETEN = "Peten"
};

type User = {
    username: string;
    location: STATES,
    age : number;
};

const getUser = (user:User) : void => {
    console.log(typeof user.age)
   return console.log(user); 
};

getUser({
    username: "Max",
    location: STATES.CHIMALTENANGO,
    age : 12
})
