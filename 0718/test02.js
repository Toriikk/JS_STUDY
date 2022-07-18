// 배열의 길이 구하기 
const ship = {
    max : 4,
    passengers : [],
    onBoard : function(name){
        if(this.passengers.length === 4){ // == 두 개일 때는 값만 비교, === 세 개일 때는 속성까지 비교(숫자의 5냐, 문자의 5냐) 
            console.log(`This ship is full. ${name} can not board this ship.` ); // el 문자 들어오면 빽틱 ``
        } else {
            this.passengers.push(name);
            console.log(`${name} board`);
        }
    }
}
ship.onBoard('chole');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');
console.log(ship.passengers);