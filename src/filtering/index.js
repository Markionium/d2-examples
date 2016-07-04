import { getInstance } from 'd2/lib/d2';

function filteringExample(d2) {
    // Model to work on
    d2.models.indicators
    // Create a filter instance that uses a builder pattern to create a modified ModelDefintion
    // Filters consists of 3 parts
    // 1) filter() intialization call
    // 2) on() method to specify what to filter on (could be deeper properties like dataSet.dataElement)
    // 3) operator call with the value. (At the moment 24.1.0 we only support equals, notEqual, like, and ilike. Adding the remaining ones should not be a big job though)
    .filter().on('name').like('anc')
    // Use normal list method to get the results
    .list()
    .then(dataElements => {
        console.log('Filter example 1:');
        console.log(dataElements);
    });

    d2.models.dataSet
        // Filters can be chained to filter on multiple properties. (These are interpreted by the API and an AND (OR is not currently supported))
        .filter().on('name').like('summary')
        .filter().on('dataElements.id').equals('pN3V4jZeCmU')
        .list()
        .then(dataSets => {
            console.log('Filter example 2:');
            console.log(dataSets);
        });
}

getInstance().then(filteringExample);