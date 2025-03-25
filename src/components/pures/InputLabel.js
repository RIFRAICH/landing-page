import { useState } from "react";
import styles from "../../styles/components/InputLabel.module.scss";

const InputLabel = ({
    id,
    type,
    placeholder,
    example,
    required = false,
    textarea = false,
    className = "" }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasText, setHasText] = useState(false);

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (event) => {
        setIsFocused(false);
        setHasText(event.target.value.length > 0);
    };

    return (
        <section className={className}>
            <section
                className={`
                    ${styles.container}
                    ${hasText || isFocused ? styles.active : ""}
                    ${isFocused ? styles.focused : ""}
                    ${textarea ? styles.textarea : ""}
                  `}>
            <label className={`${styles.label} ${textarea ? styles.labelTextarea : ""}`}>
                    {placeholder}
                </label>
                {textarea ? (
                    <textarea
                        className={styles.input}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required={required}
                        id={id}
                    />
                ) : (
                    <input
                        className={styles.input}
                        type={type}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required={required}
                        id={id}
                    />
                )}
            </section>
            {example && (
                <p className={styles.exampleText}>Ex : {example}</p>
            )}
        </section>
    );
};

export default InputLabel;
