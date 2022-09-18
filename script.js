const persons = [
  { firstname: "Joey", lastname: "Cadieux" },
  { firstname: "Joey", lastname: "Cadieux" },
  { firstname: "Joey", lastname: "Cadieux" }
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname, item.lastname].join('');
}