let report1 = [7,6,4,2,1]
let report2 = [1,2,7,8,9]
let report3 = [9,7,6,2,1]
let report4 = [1,3,2,4,5]
let report5 = [8,6,4,4,1]
let report6 = [1,3,6,7,9]

function IsValid(a: Array<number>)
{
    let pos = 1;
    let asc = true;
    while (pos < a.length)
    {
        
        if(pos == 1)
        {
            asc = a[pos-1] < a[pos];
        }
        else
        {
            if (asc != a[pos-1] < a[pos]) return false;
        }
        if(a[pos-1] == a[pos]) return false;
        if(Math.abs(a[pos-1] - a[pos])> 3) return false;
        pos++;
    }
    return true;
}

let ReportList = [report1,report2,report3,report4,report5,report6]

ReportList.forEach(element => {
    console.log(IsValid(element) ? "Safe" :"Unsafe" );
});