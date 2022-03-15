import pdf from "@react-pdf/renderer";
const { Page, Text, View, Document, StyleSheet, Image } = pdf;
import reformatDate from "../../Utils/reformatDate";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    maxWidth: "100%",
    paddingBottom: "60px",
  },
  title: {
    width: "65%",
    fontSize: "15px",
    textAlign: "center",
    marginVertical: "20px",
    marginHorizontal: "40px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  line: {
    width: "100%",
    display: "block",
    borderStyle: "inset",
    borderWidth: "1px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  image: {
    width: 35,
    height: 33,
    marginHorizontal: "5px",
  },

  footer: {
    position: "absolute",
    left: 30,
    right: 30,
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 8,
    bottom: 20,
    justifyContent: "center",
  },
});

// Create Document Component
const PdfView = ({ reportes }) => {
  console.log(reportes);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.title} fixed>
          <Text style={{ fontSize: "10px", marginBottom: "5px" }}>
            Turismo Social
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.image}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIRFBYSERISEhIYEhIVEBQQGRgUEhASGBgZGRgUGBkcITMlHCEsHxgYJzgmKy8xNTY1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQhJCE0NDQ0MT00NDU0NDE0NDQ0NDQxNDQ0MTE0NDE0NDQ0NDQ0PzU0NDQ0PzQ0MTE0NDQ0P//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQMECAL/xABGEAACAQMABAgJCgUDBQEAAAAAAQIDBBEFBiExBxJBUWGBkaETIjJCUnFyscEUM0NEYoKSorLRFiNUc8I0U9IkNWR08BX/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAYF/8QAJxEBAQABAwMDBAMBAAAAAAAAAAECAxExBBJBITJSBRNRkRRCcRX/2gAMAwEAAhEDEQA/AOizGTLMHoXjDIyAAyMgAMjIADIyAAyMgAMjIADIyAAyMgAMjIADIyAAyMgAMjIADJnJgAfWQAEMMwZZgJAMGcAYAASAAIAZwYAAAAAAAAAAAAAAAAAAAAAAAAA+gAEN/ban3k9rhCmvty29kcm1oagy2ceulzqMc97fwJ6MHx8ur1L52ejx+maGPO9ROjqJbryqlWXXFe5Hap6m2Ufo2/alL9yRgzuvqXzXROk0ZxjGkjqtZL6CPW5P4nItW7NfV6fWsm3BX7mfyq/2NL4z9NRLVuzf1en1LB1q2qFlL6Jx6YykviSACauc80vT6V5xn6Q651Doy+bq1I8yliS+D7zT3Oo1xHbTnTqLpzCXY8rvLJRho1x6rVx87sM+g0MvG3+Kcu9C3NHy6M0l5yXGj68xzg15eTidC90LbV/nKUJP0sYl2rab4dd8o49T6V8L+1OAsG+1FpSy6NScHyRl48f37yOXuqd3S2qmqkeek8v8Lwzqx6nTz87ODU6LWw5m/wDnq0IPqpTlB8WcZRlzSTT7GfJvPVybAAJAAAAAAAAAAAAAB9AAIWppHW2wt8qpcwclvjT/AJkvViOSP3fChaxyqVGtU5nLiwi+157ipWYPM91e6mEWLccKdV/N2sI/3Jyk+5I19bhLv5eTGhD7kpe+RCgR3VPZErnwg6Sf0tOPs04/E4f460l/Uv8ABT/4kaBG9O2JLHXvSS+sZ6HTp4/Sd634Sb+Hl+BqL7UHFvriyGAnup2xZtlwp7lXtX0ulPP5ZL4khsNf9H1cJ1ZUpc1aLis83GWV3lIgmZVFwj0ja3lOquNSqQqR54SUl3HYPNVvXnTlxoTnTl6UG4y7USXRuv2kKGE6irR9GvFN/iWH3lpmpcL4XhgwV7ozhPozwrmjOk+WVN8ePZsa7yXaN0/aXXzFenN+jxsTXri9paWK3Gx27qxpVVxakITXNJJkevtSbae2m50n9l8aPZL4MlYwaY6mePtuzDU6fT1PdjKrK+1LuqeXDiVo9D4k+yWzvNDdWVWk8Vac4P7UWl1Pcy6sHxOkmsNJrlTWUdOHW5z3Tdwan0vC+y7KQwYwWzeasWlXbKjGL56eYP8AKaW51CpvbTrTj0TSku1YOnHrdO8+jiz+ma2PG1QAEqrajXUfIlSkultPvR0p6o3q+hUvZnD4s2nUad/tHNek1seca0QN2tVb7+na9c6f/I5I6o3r+iS9c4/Bk/e0/wAz9q/x9X439NACTQ1Ju3v8EvXJ/BHZpah1n5danHn4qcvfgreo0p5XnR69/rUQwCf0NQqS+crVJdEVGPvyba01Ts6eH4JTfPUbn3PZ3GWXW6c49XRj9M1sudoqzKBc3/5lv/s0vwx/YyZ/zp8Wv/Jz+UecmYMswfHemAAAAAAAAAAAAAAynjatjW5rejAA3ui9br62woXE5QXmVfHjjm8baupkv0Zwpblc2/rnQf8AhL9yswTMrFbjKvnR2uNhcYULiEJPzav8uX5thvozTWU01yNbUeaDuWOlbi3eaFapT6ISaj1x3PsLTP8AKlw/D0aCmLHhHvqeFPwdZfbjxZfijj3Egs+FOm9la1nF8rpyjJdksMtMorcascESt+EPR099SdP24S/xyd2nrjo6W1XVPr4yfY0TvEbX8JADRfxfo/8Aq6Xa/wBjjqa6aNjvu6fUpP3Ibw2qQgitXX/Rsd1dy9mE370dKtwmWMfJjXm+iCWe1jeHbU3BWlzwqR+itJP+5NR7opmlvOEm+nspqlSX2YuUl1yeO4juie2rlBRf8Z6S/qp/hh+wHdE9lRtmDLMGTYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHMAAhxMwZZgJAAAAAAAAADeaD1Vu73DpU+LT/wB2p4sOp75dQk3Rbs0ZmMW3hJtvcltb6i29D8GltTxK5nOvPlivEpp+pbX1vqJfY6Jt7dYo0adNfYik363vZeYXypc54URbau3tXbC0ryXO4OK/Ng2NPUXSUvqzXtTpx+JegwT2RXvqjJ6haTX1dP2akH8TpXGqt/DbO0rYXLGPHX5cnoEwOyHfXmmtRnB8WpCcJc04uL7GfB6SubWnVXFqU4TXNOKkuxkX0rwe2NfLhGVvPklRfi56YPZ2YIuH4Wmc8qVBLdOag3dsnOCVzTXLST8IlzuG/syRNrGx7Hyp70+YpZsvLKwAAkAAAAAAABzAAIcTMGWYCQAAAAAOxY2NS4nGlRhKc5eTGPvb5F0s7Og9D1b2rGjRjl75zfkU4cspP/7JdurertCwp8SmuNNpeEqS8ub+C5kTjjupllsj2rHB7SoYqXfFrVdjUN9Km/U/LfS9nQTqMUlhLCWxJbFg+j4nUUU5SaUUstyeElzts1kkZW7vsEF07wjW1HMLZfKaiyuMvFpJ+1vl1dpA9Ka639y3ms6UH5lDxFj2l4z7SLlImYWrur3lOn85UhD25KPvZramtNhHZK7oZ5lNP3FBVJym8zk5Pnk3J9rPkr3r/bi/Y626Pf1uh1yx7zYW2lLer83WpT9icW+zJ5yEdjytj51vHefbj0wfR580brNe22PBXFRRXmTfHh6uLLOOom+hOE5PELynxeTwtHLj65Qe1dWSZlFbhYssjOsup1tfJycfBVuSrTWG39pbpLvN3Y39K4gqlGpGpB7nB56nzPoZ2y3Ksuzz5p/V+4sJ8StDxW/EqR2wmuh8j6HtNSejr+wpXEJUq0FOEliSl71zPpRS+uGqc9Hy40cztpPxJ8sH6E+nmfKZ5Y7Ncct/SoyACq4AAAAA5gAEOJmDLMBIAAB2tG2FS5qwo0o8ac5YiuRc8nzJLadUuPg31c+S0flFSP8APqxTSe+nSe2MehvY31E4zeq5ZbRvNWtA0rCiqcEnJ4dWfLUnz+rmRugajWLTdKxoyq1Hl7qcF5VSfJFfF8iNeGPrazp7TlCxpupWljeoQW2dSXoxXx3IpzWTWu5v5NSlxKOfEoxfi+ub85+s12mdK1byrKtWlmT2RivJhHkjFciOgZ5ZbtccNgAFVwAAAAAAAHf0RpevaT8JbzcJect8JrmlHcy4NU9cKV+lCWKVylmVNvZNLfKDe9dG9FIH3RqyhKM4ScJxalCUXhxktzTJmVimWMr0sde8tYVoSp1IqVOUXGUXuaZFtRdbVfQ8FVaVzGOZY2KrFefFc/OiYmsu7KyyqE1u1cno+txNsqM8yoTfnR5YN+kv2ZoT0FrLoaF9QlRnhN+NTlywqLdJe59DKDu7aVGcqdSLjOEnGSfJJGeWO1a45bxwgAquAADmAAQ4mYMswEgAAkmomhPll1GM1mlTxUq8zSfiw633Jl6pEM4MtFeAtFVksTrS47fLxFlQXvf3iZmuM2jDK71xV60acZTm1GEU3KT3RilltlD626fnf3DqPKpxzGhD0Yel63vfVzE74VdNOnThaweJVPHq43qnF7F1yX5SqCuV8L4Y+QAFGgAAAAAAAAAAAAA57G7qUKkKtOTjUhJSg1zrkfQ9zXSX3q1pmF9bwrw2NrFSPoVF5Ufiuho8+ky4NNNO3ufAzeKdfEcPdGqvIl17utFsctlMsd4ucq/hX0LhxvYLe1Tr45/Mm+zH4Sz0dDTej43VCpQlunCUVnklvjLqaTNLN4yxu1edgfVWDhKUJLEoylGS5pJ4a7UfJi6AAAcwACHEzBlmAkOW1oOpOFOPlTnCC9cmlnvOIkOoVt4S/t090ZSm/uRb9+BPVF4Xla0I04RpxWIwjGMVzKKwvcczCNbrDd+Ata9Rb4UajXr4rS7zfhz8qQ1s0l8qu61XOY8dwp9EIeLHtxnrNOAYOiAACQAAAAAAAAAAAAAPqE3FqUXiSalFrepJ5T7UfIA9E6Cv1dW9KuvPpxk+iWMNduTvshHBTd8ezlTb206skvZklJd7kTg2l3jns2qi+EGwVC+q4WIz4tWPN4y8b8yfaRosfhftsTt6uN8KkG/Zakv1Mrgyym1bY3eAAIWcwACHEzBlmAkJpwVw41636NCo12wXxIWTfgnf/Wz/APWnj8dMnHlXLiriItwj1HHR9bHK6cepzjklJEuEyOdH1N+ydJ7PbS29preGM5ikwAYugAAAAAAAAAAAAAAAAAAFlcD1Tbcw5MUZdfjos8qvggh/MuJfYpLtlJ/AtQ1x4YZ8q+4XoZt6Euau11OEv2KnLc4XP9LSX/kL9MioymXLTD2gAKruYABDiZgyzASEs4M6/Ev4L06dSH5eMv0kTNlq7d+AuqFV7o1qfG9lvEu5sTlW8PQ6I/rzb+EsLmK3qnxl9xqXwJAjhuaKqRlCW6UJRfqksM3rGcvNgOa9tpUqk6cliUJyg888W18DhMHQAAAAAAAAAAAAAAAAAAC1OCC3apXFTklUhBfci2/1osYjOoFg6FjRTWJTTqzzvzN5XdgkprOHPld6rfhgreJbU+V1Kk/wxS/yKuJvwr3nHu4009lOjFPolNuT7uKQgzy5bYe0ABCzmAAQ4mYMswEgAA9Aap6R+VWlGrnMnBRn7cfFl3rvNyVXwT6X4s6lpN7JfzKWfTSxOPWsP7rLURrjd4wym1U5wo6I8Dcq4ivErLL5lUikpdq4r7SEl/61aFjfW86Lwp+VRk/NqR3P1Pan0MoOvSlCcqdSLjOMnGcXvjJPDTKZTatMLvHwACq4AAAAAAAAAAAAAGz1d0XK7uadBbpTTm/RhHbN9i70awt3gx1fdCi7qpHFSqlxE98KO9dcnt9WCcZvVcrtE5hFRSilhJJJLcktiQnNRTbeEk229yS3s5CIcI+mPk1pKEXipWzThjeoY8eXZs+8jW3aMZN6qPTl+7m4rV359SUo9EN0V+FI6ABi6AAAcwMZMhDgAASAADe6lf6+1/ur9Mi/TINcOGOfLDKI1/8A+4XHtQ/REAjNOHKOAAzagAAAAAAAAAAAAD6p71617z0la+RD2I+5AF8GWbnKn4X/AJ+3/tVP1IAtlwrhyrwAGTcMoAD7AAQ//9k="
            />
            <Text>
              Complejo Social del Ente Interprovincial Túnel Subfluvial “Raúl
              Uranga – Carlos Sylvestre Begnis”
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "90%",
            // maxHeight: "700px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <View fixed style={styles.line}></View>
          <View style={{ fontSize: "10px" }}>
            {reportes ? (
              reportes.map((reporte, index) => {
                return (
                  <View
                    wrap={false}
                    key={index}
                    style={{
                      marginTop: "20px",
                      border: "1px solid grey",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                  >
                    <View style={{ margin: "5px" }}>
                      <Text style={{ marginVertical: "2px" }}>
                        Turno: {reporte.turno} {"       "} Fecha:{" "}
                        {reformatDate(reporte.fecha)}
                      </Text>
                      <Text style={{ marginVertical: "2px" }}>
                        Usuario: {reporte.user.username}
                      </Text>
                      <Text style={{ marginVertical: "2px" }}>Novedades: </Text>
                      <Text style={{ marginVertical: "2px" }}>
                        {reporte.detalle}
                      </Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <></>
            )}
          </View>
        </View>
        <View fixed style={styles.footer}>
          <Text>TEL +54 343 4200422 FAX +54 343 4200449</Text>
          <Text>
            MAIL turismosocial@tunelsubfluvial.gov.ar WEB
            www.tunelsubfluvial.gov.ar
          </Text>
          <Text>CASILLA POSTAL 189 Correo Argentino</Text>
          <Text>
            CORREO Av. Uranga 3208 Ciudad de Paraná (3100) República Argentina
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfView;
