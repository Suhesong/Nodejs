const fs =require('fs');

const rs=fs.createReadStream('./fsStream.txt'  );
rs.pipe(process.stdout);

