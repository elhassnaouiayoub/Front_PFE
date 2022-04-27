import { MovieSummary } from "./MovieSummary";

export interface MovieList {
    page: string;
    results: MovieSummary[];
}