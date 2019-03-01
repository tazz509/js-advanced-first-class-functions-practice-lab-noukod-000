function logDriverNames(drivers){
    drivers.forEach(function(el){
        console.log(el.name);
    });
}

function logDriversByHometown(drivers, location){
    drivers.forEach(function(el,i,arr){
        if(el.hometown === location){
            console.log(el.name);
        }
    });
}

function driversByRevenue(drivers){
    return [...drivers].sort(function (a,b){
        return a.revenue - b.revenue;
    });
}

function driversByName(drivers){
    return [...drivers].sort(function(a,b){
        return a.name.localeCompare(b.name);
    });
}

function totalRevenue(drivers){
    return drivers.reduce(function (acc, el){
        return acc + el.revenue;
    },0)
}

function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length;
}