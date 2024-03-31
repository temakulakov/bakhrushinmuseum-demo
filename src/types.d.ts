import React from "react";

interface ILink {
    title: string;
    src: string;
};

interface IHeaderLink {
    title: string;
    src: string;
    description: string;
}

interface IFooterColumns {
    title: string;
    links: ILink[];
    elements?: React.ReactNode[];
};

interface IHeaderColumn {
    head: IHeaderLink;
    links?: IHeaderColumn[];
}
