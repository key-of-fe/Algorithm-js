function solution(orders, course) {
  var answer = [];
  let menu = [];
  let sortedMenu = [];
  let picks = "";
  let isSelected = Array(orders[0].length).fill(false);

  for (let i = 0; i < course.length; i++) {
    menu.push({});
  }

  // 가능한 코스메뉴 조합 뽑기
  const pick = (start, cnt, target, now) => {
    // 다뽑으면
    if (cnt === course[target]) {
      let temp = picks.split("").sort().join("");
      if (menu[target][temp]) menu[target][temp]++;
      else menu[target][temp] = 1;
      return;
    }

    for (let i = start; i < now.length; i++) {
      if (isSelected[i]) continue;
      picks += now[i];
      isSelected[i] = true;
      pick(i, cnt + 1, target, now);
      isSelected[i] = false;
      picks = picks.slice(0, picks.length - 1);
    }
  };

  for (let i = 0; i < orders.length; i++) {
    isSelected = Array(orders[i].length).fill(false);
    for (let j = 0; j < course.length; j++) {
      pick(0, 0, j, orders[i]);
    }
  }

  // 뽑힌 순서 대로 정렬. 객체 정렬을 위해 배열로 바꿔줌
  for (let i = 0; i < menu.length; i++) {
    let sortable = [];
    for (let course in menu[i]) {
      sortable.push([course, menu[i][course]]);
    }
    sortable.sort((a, b) => {
      return b[1] - a[1];
    });
    sortedMenu.push(sortable);
  }

  // 2 이상인 코스만 뽑으니까 최대를 2로 초기화하고 큰 게 있으면 바꿔줌 그 값이면 정답 아닌거는 break
  for (let i = 0; i < sortedMenu.length; i++) {
    let max = 2;
    for (let j = 0; j < sortedMenu[i].length; j++) {
      if (sortedMenu[i][j][1] >= max) {
        max = sortedMenu[i][j][1];
        answer.push(sortedMenu[i][j][0]);
      } else {
        break;
      }
    }
  }

  answer.sort();

  return answer;
}
