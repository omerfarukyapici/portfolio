const Sentence = ({
    sentenceClassName,
    sentenceContent
}) => {
    return(
        <div className={sentenceClassName}>
            {sentenceContent}
        </div>
    );
}
export default Sentence;