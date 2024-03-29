function solution(line) {
    var meet_point = [];
    for (let i = 0; i < line.length; i++) {
        for (let j = i+1; j < line.length; j++) {
            var [a,b,e] = line[i];
            var [c,d,f] = line[j];
            if (a*d - b*c) {
                var x = (b*f-e*d)/(a*d-b*c);
                var y = (e*c-a*f)/(a*d-b*c);
                if (Number.isInteger(x) && Number.isInteger(y) && !meet_point.includes([x,y])) {
                    meet_point.push([x,y]);
                }
            }
        }
    };
    var max_x = meet_point[0][0], max_y = meet_point[0][1];
    var min_x = meet_point[0][0], min_y = meet_point[0][1];
    meet_point.forEach(([x,y]) => {
        max_x = Math.max(max_x, x);
        max_y = Math.max(max_y, y);
        min_x = Math.min(min_x,x);
        min_y = Math.min(min_y,y);
    });
    var flat = Array.from({ length: max_y-min_y+1 }, () => Array(max_x-min_x+1).fill('.'));
    meet_point.forEach(([x,y]) => {
        flat[max_y-y][x-min_x] = '*'
    });
    return flat.map(board => board.join(""));
}
