import csvtojson from 'csvtojson';

const INFLATION_CPI_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSJJqnaBdw2uzU_Bhkn7eBNqPMpzbrSUhJwjp_6eBS1E1AwO5nOlZ0bbP18FZXktrZM381hGzruFIQ-/pub?gid=0&single=true&output=csv'


const main = async () => {
  const response = await fetch(INFLATION_CPI_CSV_URL, { headers: {} })
  const allData = await response.text()

  const csvTableData = await csvtojson().fromString(allData)
  console.log(csvTableData)
}


main()
  .catch(console.error)
