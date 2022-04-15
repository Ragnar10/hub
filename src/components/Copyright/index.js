// Styles
import Styles from './styles.module.scss';

const Copyright = () => {
    return (
        <section className = { Styles.wrapper }>
            <p className = { Styles.info }>
                { 'Copyright © 2022 UaItHub Co., Ltd. All Rights Reserved' }
            </p>
        </section>
    );
};

export default Copyright;
