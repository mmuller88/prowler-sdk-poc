# API Reference <a name="API Reference"></a>


## Structs <a name="Structs"></a>

### Chek73Props <a name="prowler-sdk-poc.Chek73Props"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { Chek73Props } from 'prowler-sdk-poc'

const chek73Props: Chek73Props = { ... }
```

##### `whiteListedBucketNames`<sup>Optional</sup> <a name="prowler-sdk-poc.Chek73Props.property.whiteListedBucketNames"></a>

```typescript
public readonly whiteListedBucketNames: string[];
```

- *Type:* `string`[]

---

## Classes <a name="Classes"></a>

### Check73 <a name="prowler-sdk-poc.Check73"></a>

#### Initializers <a name="prowler-sdk-poc.Check73.Initializer"></a>

```typescript
import { Check73 } from 'prowler-sdk-poc'

new Check73(props?: Chek73Props)
```

##### `props`<sup>Optional</sup> <a name="prowler-sdk-poc.Check73.parameter.props"></a>

- *Type:* [`prowler-sdk-poc.Chek73Props`](#prowler-sdk-poc.Chek73Props)

---

#### Methods <a name="Methods"></a>

##### `doCheck` <a name="prowler-sdk-poc.Check73.doCheck"></a>

```typescript
public doCheck()
```


#### Properties <a name="Properties"></a>

##### `props`<sup>Optional</sup> <a name="prowler-sdk-poc.Check73.property.props"></a>

```typescript
public readonly props: Chek73Props;
```

- *Type:* [`prowler-sdk-poc.Chek73Props`](#prowler-sdk-poc.Chek73Props)

---



