function Section(props) {

    if (props.info === 'user') {
        return (
            <>
                {/* Top Users */}
                <section className="users">
                    <a href="#">Barsha</a>
                    <a href="#">Sneha</a>
                    <a href="#">Raman</a>
                </section>
            </>
        );
    } else if (props.info === 'about') {
        return (
            <>
                {/* About Me */}
                <section id="about">
                    <h2>About Me</h2>
                    <img src="./student.jpg" alt="" />
                    <p className="courierfont">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit." Velit nostrum
                        ipsum totam itaque voluptas eaque.
                    </p>
                    <p className="italicsfont">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam impedit
                        dolorum ut, distinctio eius quia autem eaque hic quae magnam amet sequi
                        recusandae dolores possimus commodi sapiente voluptas error esse! Vel
                        minus accusantium suscipit similique deleniti ratione necessitatibus
                        aperiam a saepe quaerat esse dolore, sequi enim laborum, dignissimos fuga
                        nulla.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, a?
                        Corrupti odio perferendis impedit ab nulla maxime veniam culpa iure amet
                        obcaecati, magni consequuntur iste accusantium quis ex cum deserunt vitae
                        sed facilis nisi dolore hic maiores! Atque odio recusandae blanditiis,
                        eveniet dolores et vero officia? Asperiores sapiente iusto obcaecati
                        quibusdam, voluptas laborum expedita beatae temporibus? Fugit similique
                        non quaerat reprehenderit eos voluptatibus cupiditate quae porro quis
                        repellat minima amet unde, nulla aliquam quasi recusandae hic iste,
                        explicabo natus veniam dolorum corporis magnam temporibus asperiores.
                        Officia mollitia autem eaque eveniet consequatur, odio, nam beatae minus
                        corporis quasi iste explicabo in et quas omnis. Quia, corrupti labore
                        reprehenderit molestiae libero consequuntur repudiandae nobis nam amet
                        tenetur recusandae dignissimos expedita, neque quae et rem doloremque
                        molestias. Aut consequatur veniam consequuntur omnis dolor odio quisquam
                        accusantium cumque temporibus fugiat, nam cupiditate aliquid, minima
                        repudiandae nesciunt voluptates distinctio voluptatum repellat earum!
                        Praesentium, animi rerum.
                    </p>
                </section>
            </>

        );
    } else if (props.info === 'skills') {
        return (
            <>
                {/* Skills */}
                <section id="skills">
                    <h2>Skills</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio
                        magni dolorum laborum recusandae sunt praesentium fuga asperiores, nisi
                        incidunt ratione earum hic, modi autem consequuntur amet corporis ut!
                        Rerum quod animi debitis quaerat voluptates maiores ipsum, veniam sit
                        repellat. Inventore assumenda et sint vitae repudiandae, mollitia commodi
                        earum provident.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                        nostrum impedit atque, similique fugit odio nesciunt voluptate modi
                        exercitationem placeat dolor quae ex dolore voluptatum, autem nihil
                        beatae, ad quo enim? Omnis cumque porro tenetur, nisi corrupti praesentium
                        facilis blanditiis explicabo magnam eligendi tempore sit molestiae?
                        Assumenda odit itaque dicta. Unde, eos eius quis similique omnis ullam
                        commodi delectus, dolorem laudantium nemo iusto exercitationem obcaecati
                        totam esse quaerat, illo quos distinctio reiciendis beatae sequi possimus
                        dignissimos itaque! Unde nihil quibusdam error quae eaque beatae nesciunt
                        vitae sint repellendus tenetur, architecto corrupti quisquam tempore
                        itaque minus perferendis, officia in repellat amet adipisci tempora magnam
                        minima? Facere aperiam id recusandae, exercitationem voluptate atque nam,
                        consequuntur officiis iste mollitia sequi quas minus, maiores molestiae
                        soluta numquam dolor rerum cumque suscipit ducimus. Obcaecati molestias
                        quas nesciunt earum fugiat debitis non dolores, est quam animi in. Odio
                        aperiam illo deserunt quis. Neque sed aperiam placeat soluta distinctio
                        cupiditate provident consequuntur non nobis assumenda deserunt laborum
                        possimus nulla iusto, eaque, nesciunt, esse vero facere est similique
                        autem animi. Porro iste quasi saepe quibusdam dolores facilis voluptates.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                        nostrum impedit atque, similique fugit odio nesciunt voluptate modi
                        exercitationem placeat dolor quae ex dolore voluptatum, autem nihil
                        beatae, ad quo enim? Omnis cumque porro tenetur, nisi corrupti praesentium
                        facilis blanditiis explicabo magnam eligendi tempore sit molestiae?
                        Assumenda odit itaque dicta. Unde, eos eius quis similique omnis ullam
                        commodi delectus, dolorem laudantium nemo iusto exercitationem obcaecati
                        totam esse quaerat, illo quos distinctio reiciendis beatae sequi possimus
                        dignissimos itaque! Unde nihil quibusdam error quae eaque beatae nesciunt
                        vitae sint repellendus tenetur, architecto corrupti quisquam tempore
                        itaque minus perferendis, officia in repellat amet adipisci tempora magnam
                        minima? Facere aperiam id recusandae, exercitationem voluptate atque nam,
                        consequuntur officiis iste mollitia sequi quas minus, maiores molestiae
                        soluta numquam dolor rerum cumque suscipit ducimus. Obcaecati molestias
                        quas nesciunt earum fugiat debitis non dolores, est quam animi in. Odio
                        aperiam illo deserunt quis. Neque sed aperiam placeat soluta distinctio
                        cupiditate provident consequuntur non nobis assumenda deserunt laborum
                        possimus nulla iusto, eaque, nesciunt, esse vero facere est similique
                        autem animi. Porro iste quasi saepe quibusdam dolores facilis voluptates.
                    </p>
                </section>
            </>

        );
    } else if (props.info === 'quali') {
        return (
            <>
                {/* Qualification */}
                <section id="qualifications">
                    <h2>Qualifications</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio
                        magni dolorum laborum recusandae sunt praesentium fuga asperiores, nisi
                        incidunt ratione earum hic, modi autem consequuntur amet corporis ut!
                        Rerum quod animi debitis quaerat voluptates maiores ipsum, veniam sit
                        repellat. Inventore assumenda et sint vitae repudiandae, mollitia commodi
                        earum provident.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                        nostrum impedit atque, similique fugit odio nesciunt voluptate modi
                        exercitationem placeat dolor quae ex dolore voluptatum, autem nihil
                        beatae, ad quo enim? Omnis cumque porro tenetur, nisi corrupti praesentium
                        facilis blanditiis explicabo magnam eligendi tempore sit molestiae?
                        Assumenda odit itaque dicta. Unde, eos eius quis similique omnis ullam
                        commodi delectus, dolorem laudantium nemo iusto exercitationem obcaecati
                        totam esse quaerat, illo quos distinctio reiciendis beatae sequi possimus
                        dignissimos itaque! Unde nihil quibusdam error quae eaque beatae nesciunt
                        vitae sint repellendus tenetur, architecto corrupti quisquam tempore
                        itaque minus perferendis, officia in repellat amet adipisci tempora magnam
                        minima? Facere aperiam id recusandae, exercitationem voluptate atque nam,
                        consequuntur officiis iste mollitia sequi quas minus, maiores molestiae
                        soluta numquam dolor rerum cumque suscipit ducimus. Obcaecati molestias
                        quas nesciunt earum fugiat debitis non dolores, est quam animi in. Odio
                        aperiam illo deserunt quis. Neque sed aperiam placeat soluta distinctio
                        cupiditate provident consequuntur non nobis assumenda deserunt laborum
                        possimus nulla iusto, eaque, nesciunt, esse vero facere est similique
                        autem animi. Porro iste quasi saepe quibusdam dolores facilis voluptates.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                        nostrum impedit atque, similique fugit odio nesciunt voluptate modi
                        exercitationem placeat dolor quae ex dolore voluptatum, autem nihil
                        beatae, ad quo enim? Omnis cumque porro tenetur, nisi corrupti praesentium
                        facilis blanditiis explicabo magnam eligendi tempore sit molestiae?
                        Assumenda odit itaque dicta. Unde, eos eius quis similique omnis ullam
                        commodi delectus, dolorem laudantium nemo iusto exercitationem obcaecati
                        totam esse quaerat, illo quos distinctio reiciendis beatae sequi possimus
                        dignissimos itaque! Unde nihil quibusdam error quae eaque beatae nesciunt
                        vitae sint repellendus tenetur, architecto corrupti quisquam tempore
                        itaque minus perferendis, officia in repellat amet adipisci tempora magnam
                        minima? Facere aperiam id recusandae, exercitationem voluptate atque nam,
                        consequuntur officiis iste mollitia sequi quas minus, maiores molestiae
                        soluta numquam dolor rerum cumque suscipit ducimus. Obcaecati molestias
                        quas nesciunt earum fugiat debitis non dolores, est quam animi in. Odio
                        aperiam illo deserunt quis. Neque sed aperiam placeat soluta distinctio
                        cupiditate provident consequuntur non nobis assumenda deserunt laborum
                        possimus nulla iusto, eaque, nesciunt, esse vero facere est similique
                        autem animi. Porro iste quasi saepe quibusdam dolores facilis voluptates.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                        nostrum impedit atque, similique fugit odio nesciunt voluptate modi
                        exercitationem placeat dolor quae ex dolore voluptatum, autem nihil
                        beatae, ad quo enim? Omnis cumque porro tenetur, nisi corrupti praesentium
                        facilis blanditiis explicabo magnam eligendi tempore sit molestiae?
                        Assumenda odit itaque dicta. Unde, eos eius quis similique omnis ullam
                        commodi delectus, dolorem laudantium nemo iusto exercitationem obcaecati
                        totam esse quaerat, illo quos distinctio reiciendis beatae sequi possimus
                        dignissimos itaque! Unde nihil quibusdam error quae eaque beatae nesciunt
                        vitae sint repellendus tenetur, architecto corrupti quisquam tempore
                        itaque minus perferendis, officia in repellat amet adipisci tempora magnam
                        minima? Facere aperiam id recusandae, exercitationem voluptate atque nam,
                        consequuntur officiis iste mollitia sequi quas minus, maiores molestiae
                        soluta numquam dolor rerum cumque suscipit ducimus. Obcaecati molestias
                        quas nesciunt earum fugiat debitis non dolores, est quam animi in. Odio
                        aperiam illo deserunt quis. Neque sed aperiam placeat soluta distinctio
                        cupiditate provident consequuntur non nobis assumenda deserunt laborum
                        possimus nulla iusto, eaque, nesciunt, esse vero facere est similique
                        autem animi. Porro iste quasi saepe quibusdam dolores facilis voluptates.
                    </p>
                </section>
            </>

        );
    } else if (props.info === 'projects') {
        return (
            <>
                {/* Projects */}
                <section id="project">
                    <h2>Projects</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio
                        magni dolorum laborum recusandae sunt praesentium fuga asperiores, nisi
                        incidunt ratione earum hic, modi autem consequuntur amet corporis ut!
                        Rerum quod animi debitis quaerat voluptates maiores ipsum, veniam sit
                        repellat. Inventore assumenda et sint vitae repudiandae, mollitia commodi
                        earum provident.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                        nostrum impedit atque, similique fugit odio nesciunt voluptate modi
                        exercitationem placeat dolor quae ex dolore voluptatum, autem nihil
                        beatae, ad quo enim? Omnis cumque porro tenetur, nisi corrupti praesentium
                        facilis blanditiis explicabo magnam eligendi tempore sit molestiae?
                        Assumenda odit itaque dicta. Unde, eos eius quis similique omnis ullam
                        commodi delectus, dolorem laudantium nemo iusto exercitationem obcaecati
                        totam esse quaerat, illo quos distinctio reiciendis beatae sequi possimus
                        dignissimos itaque! Unde nihil quibusdam error quae eaque beatae nesciunt
                        vitae sint repellendus tenetur, architecto corrupti quisquam tempore
                        itaque minus perferendis, officia in repellat amet adipisci tempora magnam
                        minima? Facere aperiam id recusandae, exercitationem voluptate atque nam,
                        consequuntur officiis iste mollitia sequi quas minus, maiores molestiae
                        soluta numquam dolor rerum cumque suscipit ducimus. Obcaecati molestias
                        quas nesciunt earum fugiat debitis non dolores, est quam animi in. Odio
                        aperiam illo deserunt quis. Neque sed aperiam placeat soluta distinctio
                        cupiditate provident consequuntur non nobis assumenda deserunt laborum
                        possimus nulla iusto, eaque, nesciunt, esse vero facere est similique
                        autem animi. Porro iste quasi saepe quibusdam dolores facilis voluptates.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                        nostrum impedit atque, similique fugit odio nesciunt voluptate modi
                        exercitationem placeat dolor quae ex dolore voluptatum, autem nihil
                        beatae, ad quo enim? Omnis cumque porro tenetur, nisi corrupti praesentium
                        facilis blanditiis explicabo magnam eligendi tempore sit molestiae?
                        Assumenda odit itaque dicta. Unde, eos eius quis similique omnis ullam
                        commodi delectus, dolorem laudantium nemo iusto exercitationem obcaecati
                        totam esse quaerat, illo quos distinctio reiciendis beatae sequi possimus
                        dignissimos itaque! Unde nihil quibusdam error quae eaque beatae nesciunt
                        vitae sint repellendus tenetur, architecto corrupti quisquam tempore
                        itaque minus perferendis, officia in repellat amet adipisci tempora magnam
                        minima? Facere aperiam id recusandae, exercitationem voluptate atque nam,
                        consequuntur officiis iste mollitia sequi quas minus, maiores molestiae
                        soluta numquam dolor rerum cumque suscipit ducimus. Obcaecati molestias
                        quas nesciunt earum fugiat debitis non dolores, est quam animi in. Odio
                        aperiam illo deserunt quis. Neque sed aperiam placeat soluta distinctio
                        cupiditate provident consequuntur non nobis assumenda deserunt laborum
                        possimus nulla iusto, eaque, nesciunt, esse vero facere est similique
                        autem animi. Porro iste quasi saepe quibusdam dolores facilis voluptates.
                    </p>
                    
                </section>
            </>

        );
    }
}

export default Section;