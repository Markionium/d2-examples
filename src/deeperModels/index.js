import { getInstance } from 'd2/lib/d2';

// The example query you were asking for would look somewhat like this. (You said you figured it out already, but figured i might show it anyhow)
// Note that when loading fields, separately it would be dangerous to call `.save()` on the model as we currently have to use REPLACE as a merge strategy for d2.
function filteringExample(d2) {
    d2.models.dataSet
        .list({fields: 'name,id,sections[id,name,dataElements[id,name,valueType]]' })
        .then(dataSets => {
            console.log('Deeper models example 2:');

            dataSets
                .toArray()
                .forEach(dataSet => {
                    dataSet.sections
                        .toArray()
                        .forEach(logSectionsWithDataElementNames);
                });
        });
}

function logSectionsWithDataElementNames(section) {
    const dataElementNames = section.dataElements.toArray().map(dataElement => dataElement.name);

    console.log(section.name);
    console.log(dataElementNames);
}

getInstance().then(filteringExample);