import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

/* import { exampleQuery } from "../lib/queries";

export const exampleLoader = (queryClient) => {
	async ({ params }) => {
		const query = exampleQuery(params.id);

		return (
			queryClient.getQueryData(query.queryKey) ??
			(await queryClient.fetchQuery(query))
		);
	};
};

const Example = () => {
	const { id } = useParams();

	console.log(id);
	const { isLoading, isError, error, data } = useQuery(exampleQuery(id));

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>Error: {error.message}</div>;
	}
	return <div>{JSON.stringify(data)}</div>;
};

export default Example; */
