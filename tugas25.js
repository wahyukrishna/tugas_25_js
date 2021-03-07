const tugas25 = () => {
    var deret = [2,39,76,50,9,7,41,2,24,1,16];
    var deretString = deret.toString();
    var deretSort = deret.sort().toString();
    var deretRev = deret.reverse().toString();
    var deretFilter = deret.filter(deret => deret > 10);
    console.log('Sebelumnya :',deretString);   
    console.log('Ascending :',deretSort);
    console.log('Descending :',deretRev);   
    console.log('Filter > 10 :',deretFilter.toString());
    
}

tugas25();