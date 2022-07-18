function solution(info, query) {
    var answer = [];
    let map = {};

    // 조합을 통해 들어오는 정보 중 조건을 - 로 만들어서 key값으로 넣어둔다
    const comb = (infos, score, map, start) => {
        let key = infos.join("");
        let value = map[key];

        if (value) {
            map[key].push(score);
        } else {
            map[key] = [score];
        }

        for (let i = start; i < infos.length; i++) {
            let combiArr = [...infos];
            combiArr[i] = "-";
            comb(combiArr, score, map, i + 1);
        }
    };

    // 이분탐색
    const binarySearch = (map, key, score) => {
        let scoreArr = map[key];

        if (scoreArr) {
            let start = 0;
            let end = scoreArr.length;

            while (start < end) {
                let mid = Math.floor((start + end) / 2);

                if (scoreArr[mid] >= score) {
                    end = mid;
                } else if (scoreArr[mid] < score) {
                    start = mid + 1;
                }
            }
            return scoreArr.length - start;
        } else return 0;
    };

    for (let i = 0; i < info.length; i++) {
        let infos = info[i].split(" ");
        let score = infos.pop();
        comb(infos, score, map, 0);
    }

    // 정렬 후 이분탐색
    for (let key in map) {
        map[key].sort((o1, o2) => o1 - o2);
    }

    for (let i = 0; i < query.length; i++) {
        let querys = query[i].replace(/and/g, "").split(" ");
        let score = Number(querys.pop());
        answer.push(binarySearch(map, querys.join(""), score));
    }

    return answer;
}
