import React, { useState } from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions"

import { Text, Heading } from '../Typography';
import { Box } from '../Box';
import { Input } from './Input';
import { Search } from '@styled-icons/evil/Search';
import { Eye, EyeOff } from '@styled-icons/feather';
import Label from './Label';
import { useForm } from 'react-hook-form';
import { Button } from '../Button';

export const Default = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Input type="text" variant="default" placeholder="placeholder" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" variant="default" placeholder="placeholder" width="100%" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" disabled placeholder="disabled" onChange={action("disabled")} />
            </Box>
        </Box>
    );
}

export const Status = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Input type="text" placeholder="default" onChange={action("default")} />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="primary" placeholder="primary" onChange={action("primary")} />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="success" placeholder="success" onChange={action("success")} />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="danger" placeholder="danger" onChange={action("danger")} />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="info" placeholder="info" onChange={action("info")} />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="warning" placeholder="warning" onChange={action("warning")} />
            </Box>
        </Box>
    );
}
export const Sizes = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Input type="text" size="small" placeholder="small" onChange={action("small")} />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" size="medium" placeholder="medium" onChange={action("medium")} />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" size="large" placeholder="large" onChange={action("large")} />
            </Box>
        </Box>
    );
}

export const Types = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Label mb="xsmall">Text</Label>
                <Input type="text" placeholedr="placeholder" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Label mb="xsmall">Date</Label>
                <Input type="date" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Label mb="xsmall">Textarea</Label>
                <Input as="textarea"></Input>
            </Box>
        </Box>
    );
}

export const Layout = () => {
    return (
        <Box>
            <Heading level="3">Vertical Form</Heading>
            <Box display="flex" flexDirection="column">
                <Box my="xsmall" px="xsmall" display="flex" flexDirection="column">
                    <Label mb="xsmall">Label</Label>
                    <Input type="text" variant="default" />
                </Box>

                <Box my="xsmall" px="xsmall" display="flex" flexDirection="column">
                    <Label mb="xsmall">Label</Label>
                    <Input type="text" variant="default" />
                </Box>

                <Box my="xsmall" px="xsmall" display="flex" flexDirection="column">
                    <Label mb="xsmall">Label</Label>
                    <Input type="text" variant="default" />
                </Box>
            </Box>

            <Heading level="3">Horizontal Form</Heading>
            <Box display="flex" flexDirection="column">
                <Box my="xsmall" px="xsmall" display="flex" flexDirection="row" justifyContent="start" alignItems="center">
                    <Box width={2 / 12}><Label>Label</Label></Box>
                    <Box width={10 / 12}><Input type="text" variant="default" width="100%" /></Box>
                </Box>
                <Box my="xsmall" px="xsmall" display="flex" flexDirection="row" justifyContent="start" alignItems="center">
                    <Box width={2 / 12}><Label>Label</Label></Box>
                    <Box width={10 / 12}><Input type="text" variant="default" width="100%" /></Box>
                </Box>
                <Box my="xsmall" px="xsmall" display="flex" flexDirection="row" justifyContent="start" alignItems="center">
                    <Box width={2 / 12}><Label>Label</Label></Box>
                    <Box width={10 / 12}><Input type="text" variant="default" width="100%" /></Box>
                </Box>
            </Box>

        </Box>
    );
}

export const MessageErreurs = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Label mb="xsmall" color="black600">Prénom</Label>
                <Input type="text" status="danger" />
                <Text color="danger500" mt="xxsmall" fontSize="13px">Le champ prénom est requis.</Text>
            </Box>
        </Box>
    );
}

export const Responsive = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Label mb="xsmall">status</Label>
                <Input status={{_: 'primary', sm: 'danger', md: 'success'}} placeholder="placeholder" />
            </Box>

            <Box my="xsmall" px="xsmall">
                <Label mb="xsmall">width</Label>
                <Input width={{ _: '100%', md: 'inherit' }} placeholder="placeholder" />
            </Box>
        </Box>
    );
}

export const WithIcon = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Input type="text" placeholder="placeholder" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input icon={<Search size="100%" />} type="text" />
            </Box>

            <Box my="xsmall" px="xsmall">
                <Input icon={<Search size="100%" />} type="text" status={{_: 'primary', sm: 'danger', md: 'success'}} />
            </Box>

            <Box my="xsmall" px="xsmall">
                <Input icon={<Search size="25px" />} size="small" placeholder="small" type="text" />
            </Box>

            <Box my="xsmall" px="xsmall">
                <Input icon={<Search size="100%" />} size="large" placeholder="large" type="text" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input reverse icon={<Search size="100%" />} width="100%" status="primary" size="large" placeholder="large" type="text" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input icon={<Search size="100%" />} width="100%" mt="20px" pl="200px" size="large" placeholder="padding-left" type="text" />
            </Box>

            <Box my="xsmall" px="xsmall">
                <Input icon={<Search size="25px" />} size="small" placeholder="small" type="text" />
            </Box>
        </Box>
    );
}

export const Password = () => {

    const [value, setValue] = React.useState("");
    const [reveal, setReveal] = React.useState(false);

    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Label mb="xsmall">Password</Label>
                <Input icon={reveal ? <Eye size="90%" onClick={() => setReveal(!reveal)} /> : <EyeOff size="90%" onClick={() => setReveal(!reveal)} />}
                    type={reveal ? "text" : "password"}
                    reverse
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    placeholder="password" />
            </Box>
        </Box>
    )
}


export const DarAlMoukawil = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Label variant="dam">Prénom <Text as="span" fontWeight="bold" color="#ef3d25">(*)</Text></Label>
                <Input type="text" variant="dam" width='100%' size="dam" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Label variant="dam">Prénom <Text as="span" fontWeight="bold" color="#ef3d25">(*)</Text></Label>
                <Input type="text" variant="dam" width='100%' size="dam" />
            </Box>
        </Box>
    );
}
export const AWB = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box m="0 0 40px" px="xsmall">
                <Label variant="awb">Prénom <Text as="span" color="#ef3d25">*</Text></Label>
                <Input type="text" variant="awb" width='100%' size="awb" />
            </Box>
            <Box m="0 0 40px" px="xsmall">
                <Label variant="awb">Nom <Text as="span" color="#ef3d25">*</Text></Label>
                <Input type="text" variant="awb" width='100%' size="awb" />
            </Box>
        </Box>
    );
}

export const ReactHookForm = () => {

    const [formData, setFormData] = useState({nom: "", prenom: ""});

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setFormData(data);
        console.log(data)
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box display="flex" flexDirection="column">
                    <Box my="xsmall" px="xsmall">
                        <Label>Prénom</Label>
                        <Input name="prenom" type="text"  ref={register}/>
                    </Box>
                    <Box my="xsmall" px="xsmall">
                        <Label>Nom</Label>
                        <Input name="nom"  type="text"  ref={register} />
                    </Box>

                    <Box my="xsmall" px="xsmall">
                        <Button type="submit" variant="primary" size="medium">Submit</Button>
                    </Box>
                </Box>
            </form>
            <Box>
            <Box display="flex" flexDirection="column">
                    <Box my="xsmall" px="xsmall">
                        <Text as="span" fontWeight="bold">Nom:</Text>
                        <Text as="span">{formData && formData.nom}</Text>
                    </Box>
                    <Box my="xsmall" px="xsmall">
                        <Text as="span" fontWeight="bold">Prénom:</Text>
                        <Text as="span">{ formData && formData.prenom}</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}



export default {
    title: 'Form/Input',
    decorators: [withKnobs],
};