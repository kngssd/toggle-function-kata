//soughtID = string, array of objects - it returns a new array of objects

//id (string) and isOn (boolean)

export default function toggleObjectInArray(soughtID, objects) {
    const result = objects.map((object) => {
        if (object.id === soughtID) {
            return { ...object, isOn: !object.isOn };
        }
        return object;
    });
    return result;
}

console.log(toggleObjectInArray);
