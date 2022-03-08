//문제 이름: WoongDo
//이 문제는 실력보다는 당신의 코딩 스타일을 보는 것입니다.
// 세 자연수가 (x, y, z)로 주어지는데, 1부터 z사이에 있는 자연수가 x의 배수면 Woong, y의 배수면 Do, x와 y의 배수이면 WoongDo를 출력하세요. 이 조건들을 불만족하는 수이면 그 수를 출력하세요.
//정해:
export const Woongdo = (n1: number, n2: number, n3:number): number => {
    for(let i = 1; i <= n3; i++) {
    if (i % n1 == 0 && i%n2==0){
      return 
    }else if (i % n1 == 0){
      console.log('Woong\n');
    }else if (i % n2 == 0){ 
      console.log('Do\n');
    }else{ 
      console.log("%d\n", i);
    }
  }
