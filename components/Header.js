import headerStyles from '../styles/Header.module.css';

function Header() {
    const x = 4;
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>NEWS +</span>
            </h1>
            {/* <style jsx>
               { `.title{
                color:${x>3 ? '#0070f3':'red'};
               }`}
            </style> */}
            <p className={headerStyles.description}>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>
        </div>
    )
}

export default Header;