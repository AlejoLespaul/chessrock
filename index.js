const challengeFunction = function(rookCell, destinationCell){
    let positionA = rookCell.split('');
    let positionb = destinationCell.split('');

    return positionA[0] == positionb[0] || positionA[1]== positionb[1];    
}

module.exports = challengeFunction
