import { PaginationUl, PageItem, PageLink } from './style';

function Pagination({ projectsPerPage, totalProjects, paginate }) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <PaginationUl>
                {pageNumbers.map(number => (
                    <PageItem key={number} onClick={() => paginate(number)}>
                        <PageLink>
                            {number}
                        </PageLink>
                    </PageItem>
                ))}
            </PaginationUl>
        </nav>
    );
}

export default Pagination;