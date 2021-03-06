import { strict } from "assert";
import { QueryType } from "../query-proxy";

export class QueryString extends QueryType {
	valueOf(): string {
		throw "Invalid use of QueryTypes. QueryTypes cannot be used during runtime";
	}

	startsWith(value: string | QueryString): boolean {
		throw "Invalid use of QueryTypes. QueryTypes cannot be used during runtime";
	}

	startOf(value: string | QueryString): boolean {
		throw "Invalid use of QueryTypes. QueryTypes cannot be used during runtime";
	}

	endsWith(value: string | QueryString): boolean {
		throw "Invalid use of QueryTypes. QueryTypes cannot be used during runtime";
	}

	endOf(value: string | QueryString): boolean {
		throw "Invalid use of QueryTypes. QueryTypes cannot be used during runtime";
	}

	includes(value: string | QueryString): boolean {
		throw "Invalid use of QueryTypes. QueryTypes cannot be used during runtime";
	}

	uppercase(): QueryString {
		throw "Invalid use of QueryTypes. QueryTypes cannot be used during runtime";
	}

	lowercase(): QueryString {
		throw "Invalid use of QueryTypes. QueryTypes cannot be used during runtime";
	}

	substringOf(value: string | QueryString): boolean {
		throw "Invalid use of QueryTypes. QueryTypes cannot be used during runtime";
	}
}