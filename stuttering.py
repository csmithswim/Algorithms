#Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.


def stuttering(word):
    syllable=word[:2]
    finalWord=syllable+'... '+syllable+"... "+word
    return finalWord
    print(finalWord)


stuttering('incredible')