import { supabase } from './conn';

const insert = (sub, cnt) => {
   let handler = async () => {
        const { data, error } = await supabase
        .from('report_issue')
        .insert([
        { subject: sub, content: cnt },
        ])

        console.log("log error:", error);
        return { data, error };
    }
    handler()
        .then(({ data }) => { alert(data); })
        .catch(({ error }) => { alert("error", error); });
}

const select = () => {
    let handler = async () => {
        let { data: county_city, error } = await supabase
            .from('county_city')
            .select('*');

        let data = county_city[0]["name"];

        console.log("log error:", error);
        console.log("log data:", data);
        return { data, error };
    }
    handler()
        .then(({ data }) => { alert(data); })
        .catch(({ error }) => { alert("error", error); });
}

export default insert;
