// JSON형태로 출력
// JSON.stringify(값, 리플레이서, 공백 개수)

/*
첫 번째 인자는 JSON 문자열로 변환할 대상 값이다.
두 번째 리플레이서(Replacer) 는 JSON 문자열로 변환하기 전에 값을 변경하는 인자이다.
이때 리플레이서로 콜백함수를 넣거나, 특정 키정보를 담은 배열을 넣어 값을 변경한다.
세 번째 인자 공백 개수는 JSON 문자열의 들여쓰기 시 공백 개수를 의미한다. 1부터 10까지 지정할 수 있고,
null 이나 0 또는 음수인 경우 공백을 사용하지 않는 것으로 간주한다.
*/

const testStringiify = {
    stringfileNum: JSON.stringify(13.1),
    stringfileStr: JSON.stringify('Carnival'),
    stringfileBln: JSON.stringify(false),
    stringfileArr: JSON.stringify([2021, 2022]),
};

for (let key in testStringiify) {
    console.log(`--------${key}--------`);
    console.log(typeof testStringiify[key]);
    console.log(testStringiify[key]);
}