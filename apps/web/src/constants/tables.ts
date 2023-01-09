export const TABLES = [
    {
        table: 'mimifund',
        axisProp: 'prtp',
        xLabelProp: 'year',
        dataProps: ['scc'],
    },
    {
        table: 'mimigive',
        axisProp: 'prtp',
        xLabelProp: 'year',
        dataProps: ['scc'],
    },
    {
        table: 'noaa',
        axisProp: 'prtp',
        xLabelProp: 'full_date',
        dataProps: ['trend', 'smoothed'],
    },
    {
        table: 'damagescountry',
        axisProp: 'ISO3',
        xLabelProp: 'N',
        dataProps: ['16.7%', '50%', '83.3%'],
    },
]