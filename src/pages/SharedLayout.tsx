import { Header, Sidebar } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../utils/api";
import { url_country_data, url_graph, url_world_data } from "../utils/helper";

/*
 * CONTAINS AND MANAGES THE OVERALL LAYOUT OF APPLICATION.
 * USES REACT QUERY TO PREFETCH DATA.
 * SETS THE TITLE OF THE HEADER
 */

const SharedLayout = () => {
    const [title, setTitle] = useState<string>("Contact Page");
    const location = useLocation();

    const queryClient = useQueryClient();

    const prefetchQueries = useCallback(async () => {
        await queryClient.prefetchQuery({
            queryKey: ['covidCases'],
            queryFn: () => fetchData(url_graph).then((queryData) => queryData.data),
        })
        await queryClient.prefetchQuery({
            queryKey: ['covidCases_country'],
            queryFn: () => fetchData(url_country_data).then((queryData) => queryData.data)
        })
        await queryClient.prefetchQuery({
            queryKey: ['covidCases_world'],
            queryFn: () => fetchData(url_world_data).then((queryData) => queryData.data)
        })
    }, [url_graph, url_country_data, url_world_data]);

    useEffect(() => { prefetchQueries(); }, [prefetchQueries]);

    useEffect(() => {
        if (location.pathname === "/dashboard") {
            setTitle("Charts and Maps");
        } else {
            setTitle("Contact Page");
        }
    }, [location.pathname]);

    return (
        <>
            <Header title={title} />
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default SharedLayout;